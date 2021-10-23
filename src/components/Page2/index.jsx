import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { setCovidInfo } from '../../redux/userInfoSlice';
import { covidInfo } from '../../redux/selectors';

import { routPrefix } from '../../constants';
import CheckBox from '../commons/CheckBox';
import HandleTest from './HandleText';
import HaveTest from './HaveAntiBodyTest';
import HaveNotTest from './HaveNotAntiBodyTest';
import './page2.scss';

const Page2 = ({ history }) => {
	const { register, formState: { errors, isValid }, setValue, handleSubmit } = useForm({
		mode: 'all'
	});
	//const numberOfRoutPage = window.location.pathname.split('=').pop();

	const dispatch = useDispatch();
	const covidInformation = useSelector(covidInfo);

	const [ showImg, setShowImg ] = useState(false);
	const [ handleAntibodyTest, setHandleAntibodyTest ] = useState(false);
	const [ haveAntibodyTest, setHaveAntibodyTest ] = useState(false);
	const [ haveNotAntibodyTest, setHaveNotAntibodyTest ] = useState(false);
	const [ checked, setChecked ] = useState(false);

	useEffect(() => {
		window.scrollTo(0, 0);
		setShowImg(true);
		if (covidInformation) {
			const { haveCovid, antiBodyTest, whenHadCovid, date, antiBodiesCount } = covidInformation;
			setValue('haveCovid', haveCovid, { shouldValidate: true });
			if (haveCovid === 'yes') {
				setHandleAntibodyTest(true);
				setValue('antiBodyTest', antiBodyTest);
				if (antiBodyTest === 'noTest') {
					setHaveNotAntibodyTest(true);
					setValue('whenHadCovid', whenHadCovid);
				}
				if (antiBodyTest === 'yesTest') {
					setHaveAntibodyTest(true);
					setValue('date', date);
					setValue('antiBodiesCount', antiBodiesCount);
				}
			}
		}
	}, []);

	const onSubmit = (data) => {
		let newDataObj = {};
		if (data.haveCovid == 'no' || data.haveCovid === 'now') {
			newDataObj = {
				haveCovid: data.haveCovid
			};
			dispatch(setCovidInfo(newDataObj));
		} else if (data.haveCovid === 'yes' && data.antiBodyTest === 'noTest') {
			newDataObj = {
				haveCovid: data.haveCovid,
				antiBodyTest: data.antiBodyTest,
				whenHadCovid: data.whenHadCovid
			};
			dispatch(setCovidInfo(newDataObj));
		} else {
			newDataObj = {
				haveCovid: data.haveCovid,
				antiBodyTest: data.antiBodyTest,
				date: data.date,
				antiBodiesCount: data.antiBodiesCount
			};
			dispatch(setCovidInfo(newDataObj));
		}
		history.push(`/${routPrefix}/კითხვარი/page3`);
	};

	const renderBlock = (name) => {
		if (name === 'no' || name === 'now') {
			setHandleAntibodyTest(false);
			setHaveAntibodyTest(false);
			setHaveNotAntibodyTest(false);
			setChecked(true);
		}
		if (name === 'yes') {
			setHandleAntibodyTest(true);
			setChecked(false);
		}
		if (name === 'yesTest') {
			setHaveAntibodyTest(true);
			setHaveNotAntibodyTest(false);
		}
		if (name === 'noTest') {
			setHaveAntibodyTest(false);
			setHaveNotAntibodyTest(true);
		}
	};

	const handleRadioButton = (e) => {
		renderBlock(e.target.value);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="form_wrapper">
			<div className="top_path">
				<div className="input_content ">
					<p className="title">თუ გაქვს გადატანილი კოვიდ19*</p>
					<CheckBox
						text="კი"
						handleRadioButton={handleRadioButton}
						value="yes"
						{...register('haveCovid', {
							required: true
						})}
					/>

					<CheckBox
						text="არა"
						handleRadioButton={handleRadioButton}
						value="no"
						{...register('haveCovid', {
							required: true
						})}
					/>
					<CheckBox
						text="ახლა მაქვს"
						handleRadioButton={handleRadioButton}
						value="now"
						{...register('haveCovid', {
							required: true
						})}
					/>
					{handleAntibodyTest && <HandleTest handleRadioButton={handleRadioButton} register={register} />}
					{haveAntibodyTest && <HaveTest register={register} errors={errors} />}
					{haveNotAntibodyTest && <HaveNotTest register={register} errors={errors} />}
				</div>

				<div className="img_container">
					<div className="user">
						<img src={`/${routPrefix}/assets/img/vaccinate2.png`} alt="img" />
						<div className={showImg ? 'ball show_ball' : 'ball  '}>
							<img src={`/${routPrefix}/assets/img/main logo-ball.png`} alt="img" />
						</div>
					</div>
				</div>
			</div>

			<button className="submit_btn">
				<img
					src={`/${routPrefix}/assets/img/Vector 2.png`}
					alt="img"
					className="back_btn"
					onClick={() => {
						history.goBack();
					}}
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

export default Page2;
