import React, { Fragment, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { setRecommendations } from '../../redux/userInfoSlice';
import { useDispatch, useSelector } from 'react-redux';
import { recommendations } from '../../redux/selectors';
import { routPrefix } from '../../constants';

import CheckBox from '../commons/CheckBox';
import './page4.scss';

const Recommendations = ({ history }) => {
	const { register, setValue, formState: { isValid }, handleSubmit } = useForm();
	const [ disableButton, setDisableButton ] = useState(false);
	const [ showImg, setShowImg ] = useState(false);

	const dispatch = useDispatch();
	const recommendationsInfo = useSelector(recommendations);

	useEffect(() => {
		setShowImg(true);
		if (recommendationsInfo) {
			const { onlineMeetings, workDayInOffice, gatherings, environment } = recommendationsInfo;
			setValue('onlineMeetings', onlineMeetings);
			setValue('workDayInOffice', workDayInOffice);
			setValue('gatherings', gatherings, { shouldValidate: true });
			setValue('environment', environment, { shouldValidate: true });
		}
	}, []);

	const onSubmit = (data) => {
		dispatch(setRecommendations(data));
		history.push(`/${routPrefix}/კითხვარი/complete`);
	};

	let onlineMeetings = '';
	let workDayInOffice = '';
	const handleRadioButton = (e) => {
		if (e.target.name === 'onlineMeetings') {
			onlineMeetings = 'onlineMeetings';
		} else if (e.target.name === 'workDayInOffice') {
			workDayInOffice = 'workDayInOffice';
		}
		if (onlineMeetings && workDayInOffice) {
			setDisableButton(true);
		}
	};
	return (
		<Fragment>
			<form onSubmit={handleSubmit(onSubmit)} className="form_wrapper">
				<div className="top_path">
					<div className="input_content ">
						<div className="head_text">
							<p>
								რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო, რომელსაც ჩვენი
								თანამშრომლები ქმნით ბევრისთვის არის და ყოფილა წლების განმავლობაში ერთად მიზნებისთვის
								ბრძოლის მიზეზი, ბევრისთვის კი - ჩვენთან გადმოსვლის.
							</p>
							<p>
								პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ პირისპირ და ყოველდღიური კომუნიკაციაც
								გაიშვიათდა.
							</p>
						</div>
						<div className="chechkbox_block">
							<p className="title">
								რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები, სადაც ყველა
								სურვილისამებრ ჩაერთვება?*
							</p>
							<CheckBox
								text=" კვირაში ორჯერ"
								handleRadioButton={handleRadioButton}
								value="twiceAWeek"
								{...register('onlineMeetings', {
									required: true,
									checked: true
								})}
							/>

							<CheckBox
								text="კვირაში ერთხელ"
								handleRadioButton={handleRadioButton}
								value="onceAWeek"
								{...register('onlineMeetings', {
									required: true
								})}
							/>
							<CheckBox
								text="ორ კვირაში ერთხელ"
								handleRadioButton={handleRadioButton}
								value="fortnightly"
								{...register('onlineMeetings', {
									required: true
								})}
							/>
							<CheckBox
								text="თვეში ერთხელ"
								handleRadioButton={handleRadioButton}
								value="onceAMonth"
								{...register('onlineMeetings', {
									required: true
								})}
							/>
						</div>
						<div className="chechkbox_block">
							<p className="title">რამდენი დღე კვირაში ისურვებდი ოფისიდან მუშაობას?*</p>
							<CheckBox
								text="0"
								handleRadioButton={handleRadioButton}
								value="0"
								{...register('workDayInOffice', {
									required: true
								})}
							/>

							<CheckBox
								text="1"
								handleRadioButton={handleRadioButton}
								value="1"
								{...register('workDayInOffice', {
									required: true
								})}
							/>
							<CheckBox
								text="2"
								handleRadioButton={handleRadioButton}
								value="2"
								{...register('workDayInOffice', {
									required: true
								})}
							/>
							<CheckBox
								text="3"
								handleRadioButton={handleRadioButton}
								value="3"
								{...register('workDayInOffice', {
									required: true
								})}
							/>
							<CheckBox
								text="4"
								handleRadioButton={handleRadioButton}
								value="4"
								{...register('workDayInOffice', {
									required: true
								})}
							/>
							<CheckBox
								text="5"
								handleRadioButton={handleRadioButton}
								value="5"
								{...register('workDayInOffice', {
									required: true
								})}
							/>
						</div>
						<div className="chechkbox_block">
							<p className="title">რას ფიქრობ ფიზიკურ შეკრებებზე?</p>
							<textarea {...register('gatherings')} />
						</div>
						<div className="chechkbox_block">
							<p className="title">
								რას ფიქრობ არსებულ გარემოზე: რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?
							</p>
							<textarea {...register('environment')} />
						</div>
						<button className={disableButton || isValid ? 'finish_btn ' : 'finish_btn  disabled'}>
							დასრულება
						</button>
					</div>

					<div className="img_container">
						<div className="user">
							<img src={`/${routPrefix}/assets/img/bike2 1.png`} alt="img" />
							<div className={showImg ? 'heart show_heart' : 'heart'}>
								<img src={`/${routPrefix}/assets/img/main logo-heart.png`} alt="" />
							</div>
						</div>
					</div>
				</div>
			</form>
			<button className="submit_btn">
				<img
					src={`/${routPrefix}/assets/img/Vector 2.png`}
					alt="img"
					className="back_btn"
					onClick={() => history.goBack()}
				/>
			</button>
		</Fragment>
	);
};

export default Recommendations;
