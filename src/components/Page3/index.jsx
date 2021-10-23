import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { setVaccinationInfo } from '../../redux/userInfoSlice';
import { vaccinationInfo } from '../../redux/selectors';

import { routPrefix } from '../../constants';
import ChooseStage from './ChooseStage';
import RegistrationLink from './RegistrationLink';
import NotVaccinated from './NotVaccinatedPage';
import CheckBox from '../commons/CheckBox';
import './page3.scss';

const VaccinationPage = ({ history }) => {
	const { register, formState: { isValid }, setValue, handleSubmit } = useForm();

	const dispatch = useDispatch();
	const vaccinationInformation = useSelector(vaccinationInfo);

	const [ showImg, setShowImg ] = useState(false);
	const [ checked, setChecked ] = useState(false);
	const [ isVaccinated, setIsVaccinated ] = useState(false);
	const [ regLink, setRegLink ] = useState(false);
	const [ notVaccinatedPage, seNotVaccinatedPage ] = useState(false);
	const [ dontPlan, setDontPlan ] = useState(false);
	const [ planVacc, setPlanVacc ] = useState(false);

	useEffect(() => {
		window.scrollTo(0, 0);
		setShowImg(true);
		if (vaccinationInformation) {
			const { vaccinated, vaccinationStage, reason } = vaccinationInformation;
			setValue('vaccinated', vaccinated);
			if (vaccinated === 'yes') {
				setIsVaccinated(true);
				setValue('vaccinationStage', vaccinationStage);
			}
			if (vaccinated === 'no') {
				seNotVaccinatedPage(true);
				setValue('reason', reason);
			}
		}
	}, []);

	const onSubmit = (data) => {
		let newDataObj = {};
		if (data.vaccinated == 'no') {
			newDataObj = {
				vaccinated: data.vaccinated,
				reason: data.reason
			};
		} else {
			newDataObj = {
				vaccinated: data.vaccinated,
				vaccinationStage: data.vaccinationStage
			};
		}
		dispatch(setVaccinationInfo(newDataObj));
		history.push(`/${routPrefix}/კითხვარი/page4`);
	};

	const handleRadioButton = (e) => {
		if (e.target.value === 'yes') {
			setValue('vaccinationStage', '');
			setIsVaccinated(true);
			setDontPlan(false);
			seNotVaccinatedPage(false);
			setPlanVacc(false);
		}
		if (e.target.value === 'no') {
			setValue('reason', '');
			setIsVaccinated(false);
			seNotVaccinatedPage(true);
			setChecked(false);
			setRegLink(false);
		}
		if (e.target.value === 'firstDose' || e.target.value === 'FullyVaccinated') {
			setRegLink(false);
			setChecked(true);
		}
		if (e.target.value === 'onlyFirstDose') {
			setRegLink(true);
			setChecked(true);
		}
		if (e.target.value === 'dontPlan') {
			setDontPlan(true);
			setPlanVacc(false);
			setChecked(true);
		}
		if (e.target.value === 'waitingVacData') {
			setDontPlan(false);
			setPlanVacc(false);
			setChecked(true);
		}
		if (e.target.value === 'PlanVaccinated') {
			setPlanVacc(true);
			setDontPlan(false);
			setChecked(true);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="form_wrapper">
			<div className="top_path">
				<div className="input_content ">
					<p className="title">უკვე აცრილი ხარ?*</p>
					<CheckBox
						text="კი"
						handleRadioButton={handleRadioButton}
						value="yes"
						{...register('vaccinated', {
							required: true
						})}
					/>

					<CheckBox
						text="არა"
						handleRadioButton={handleRadioButton}
						value="no"
						{...register('vaccinated', {
							required: true
						})}
					/>
					{isVaccinated && <ChooseStage handleRadioButton={handleRadioButton} register={register} />}
					{regLink && <RegistrationLink />}
					{notVaccinatedPage && <NotVaccinated handleRadioButton={handleRadioButton} register={register} />}
					{dontPlan && (
						<Link
							to={{ pathname: 'https://booking.moh.gov.ge' }}
							className="link"
							target="_blank"
							rel="noopener noreferrer"
						>
							👉 https://booking.moh.gov.ge/
						</Link>
					)}
					{planVacc && (
						<div className="vacInfo">
							<p>
								ახალი პროტოკოლით კოვიდის გადატანიდან 1 <br /> თვის შემდეგ შეგიძლიათ ვაქცინის გაკეთება.
							</p>
							<p className="text">👉 რეგისტრაციის ლინკი</p>
							<Link
								to={{ pathname: 'https://booking.moh.gov.ge' }}
								className="link"
								target="_blank"
								rel="noopener noreferrer"
							>
								https://booking.moh.gov.ge/
							</Link>
						</div>
					)}
				</div>

				<div className="img_container">
					<div className="user">
						<img src={`/${routPrefix}/assets/img/doctor2-tr.png`} alt="img" />
						<div className={showImg ? 'star show_star' : 'star  '}>
							<img src={`/${routPrefix}/assets/img/main logo-2-tr.png`} alt="img" />
						</div>
					</div>
				</div>
			</div>
			<button className="submit_btn">
				<img
					src={`/${routPrefix}/assets/img/Vector 2.png`}
					alt="img"
					className="back_btn"
					onClick={() => history.goBack()}
				/>
				<img
					src={`/${routPrefix}/assets/img/Vector 2.png`}
					className={checked || isValid ? '' : 'disabled '}
					alt="img"
				/>
			</button>
		</form>
	);
};

export default VaccinationPage;
