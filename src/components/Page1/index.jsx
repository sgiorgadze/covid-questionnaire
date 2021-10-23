import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { useDispatch, useSelector } from 'react-redux';

import { FORM_PATTERNS, routPrefix } from '../../constants';
import { userInfoSelector } from '../../redux/selectors';
import { setUserInfo } from '../../redux/userInfoSlice';

import Input from '../commons/Input/index';
import './page1.scss';

const Page1 = ({ history }) => {
	const { register, formState: { errors, isValid }, setValue, handleSubmit } = useForm({
		mode: 'all'
	});

	const dispatch = useDispatch();
	const userInfo = useSelector(userInfoSelector);

	const [ showImg, setShowImg ] = useState(false);

	useEffect(
		() => {
			setShowImg(true);
			if (userInfo) {
				setValue('name', userInfo.name, { shouldValidate: true });
				setValue('surname', userInfo.surname, { shouldValidate: true });
				setValue('email', userInfo.email, { shouldValidate: true });
			}
		},
		[ userInfo ]
	);

	const onSubmit = (data) => {
		window.scrollTo(0, 0);
		dispatch(setUserInfo(data));
		history.push(`/${routPrefix}/კითხვარი/page2`);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="form_wrapper">
			<div className="top_path">
				<div className="input_content">
					<div className="form_group">
						<Input
							name="name"
							label="სახელი"
							{...register('name', {
								required: 'სახელის ველი სავალდებულოა',
								minLength: {
									value: 3,
									message: 'სახელის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოგან '
								},
								maxLength: {
									value: 255,
									message: 'სახელის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან'
								},
								pattern: {
									value: FORM_PATTERNS.letters.value,
									message: 'სახელის ველი უნდა შეიცავდეს მხოლოდ ალფაბეტის სიმბოლოებს(ა-ჰ, a-z, A-Z)'
								}
							})}
						/>
						<ErrorMessage errors={errors} name="name" render={({ message }) => <span>{message}</span>} />
					</div>
					<div className="form_group">
						<Input
							name="surname"
							label="გვარი"
							{...register('surname', {
								required: 'გვარის ველი სავალდებულოა',
								pattern: {
									value: FORM_PATTERNS.letters.value,
									message: 'გვარის ველი უნდა შეიცავდეს მხოლოდ ალფაბეტის სიმბოლოებს(ა-ჰ, a-z, A-Z)'
								},
								minLength: {
									value: 3,
									message: 'გვარის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოგან'
								},
								maxLength: {
									value: 255,
									message: 'გვარის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან'
								}
							})}
						/>
						<ErrorMessage errors={errors} name="surname" render={({ message }) => <span>{message}</span>} />
					</div>

					<div className="form_group">
						<Input
							name="email"
							label="მეილი"
							{...register('email', {
								required: 'მეილის ველი სავალდებულოა',
								pattern: {
									value: FORM_PATTERNS.email.value,
									message:
										'თქვენს მიერ შეყვანილი მეილი არასწორია, გთხოვთ დარეგისტრირდეთ რედბერის მეილით(youremail@redberry.ge)'
								}
							})}
						/>
						<ErrorMessage errors={errors} name="email" render={({ message }) => <span>{message}</span>} />
					</div>

					<div className="attention_block">
						<p>
							*-ით მონიშნული ველების შევსება <br /> სავალდებულოა
						</p>
					</div>
				</div>

				<div className="img_container">
					<div className="user">
						<img src={`/${routPrefix}/assets/img/scan2-tr.png`} alt="img" />
						<div className={showImg ? 'shadow show ' : 'shadow'}>
							<img src={`/${routPrefix}/assets/img/userShadow.png`} alt="" />
						</div>
					</div>
				</div>
			</div>
			<button className="submit_btn">
				<img src={`/${routPrefix}/assets/img/Vector 2.png`} alt="" className={isValid ? '' : 'disabled '} />
			</button>
		</form>
	);
};

export default Page1;
