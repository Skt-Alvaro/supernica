import React, { useState, useRef } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Header from "../components/Header";
import styled from "styled-components";
import Spinner from "../components/Spinner";

const DivBackground = styled.div`
	background-image: url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.fansided.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2017%2F04%2F667493138-the-fc-barcelona-starting-eleven-pictured-prior-to-the-uefa.jpg.jpg&f=1&nofb=1");
	height: 100vh;
	width: 100%;
	background-size: cover;
`;

const Div = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 8%;

	@media (max-width: 769px) {
		margin-top: 2%;
	}
`;

const Form = styled.form`
	display: grid;
	grid-template-columns: 50% 50%;
	grid-gap: 2em;
	width: 40%;

	@media (max-width: 769px) {
		display: grid;
		width: 90%;
		grid-template-columns: auto;
	}

	@media (max-width: 426px) {
		display: block;
	}
`;

const Input = styled.input`
	width: 95%;
	padding: 10px;
	font-size: 15px;
	margin-bottom: 3px;

	@media (width: 768px) {
		width: 100%;
	}
`;

const Button = styled.input`
	padding: 10px;
	grid-column: 1 / span 2;
	width: 40%;
	margin: 0 auto;

	@media (max-width: 769px) {
		width: 100%;
	}
`;

const Label = styled.label`
	color: red;
	font-size: 15px;
`;

const H1 = styled.h1`
	grid-column: 1 / span 2;
	color: #fff;
	@media (max-width: 769px) {
		margin-bottom: 15px;
	}
`;

const Div2 = styled.div`
	@media (max-width: 769px) {
		margin-bottom: 20px;
		text-align: center;
	}
`;

const Div3 = styled.div`
	display: flex;
	align-items: center;
	grid-column: 1 / span 2;
	justify-content: center;
`;

const Div4 = styled.div`
	display: block;
	align-items: center;
	grid-column: 1 / span 2;

	@media (max-width: 769px) {
		margin-bottom: 20px;
	}
`;

const InputCheck = styled.input`
	margin-right: 4px;
	cursor: pointer;
`;

const DivCheck = styled.div`
	@media (max-width: 769px) {
		text-align: center;
	}
`;

const Register = () => {
	const router = useRouter();

	const [loading, setLoading] = useState(null);

	const { register, handleSubmit, errors, watch } = useForm();

	const password = useRef({});
	password.current = watch("password", "");

	const onSubmit = async (data) => {
		setLoading(true);
		delete data.password2;
		delete data.terms;
		console.log(data);
		const url = "http://165.22.1.82:3000/api/user/signup";

		let request = await fetch(url, {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		let res = await request.json();
		setLoading(false);

		if (!res.error) {
			localStorage.setItem("token", res.token);
			router.push("/");
		}
	};

	return (
		<DivBackground>
			<Header />
			<Div>
				<Form onSubmit={handleSubmit(onSubmit)}>
					<Div3>
						<H1>Registro</H1>
					</Div3>
					<Div2>
						<Input
							placeholder="Nombre"
							name="firstname"
							ref={register({
								required: {
									value: true,
									message: "Este campo es obligatorio",
								},
							})}
						/>
						<Label>{errors?.firstname?.message}</Label>
					</Div2>
					<Div2>
						<Input
							placeholder="Apellido"
							name="lastname"
							ref={register({
								required: {
									value: true,
									message: "Este campo es obligatorio",
								},
							})}
						/>
						<Label>{errors?.lastname?.message}</Label>
					</Div2>
					<Div2>
						<Input
							placeholder="Contraseña"
							type="password"
							name="password"
							ref={register({
								required: {
									value: true,
									message: "Este campo es obligatorio",
								},
								minLength: {
									value: 8,
									message: "Tu contraseña debe tener mínimo 8 caracteres",
								},
							})}
						/>
						<Label>{errors?.password?.message}</Label>
					</Div2>
					<Div2>
						<Input
							placeholder="Repetir contraseña"
							type="password"
							name="password2"
							ref={register({
								required: {
									value: true,
									message: "Este campo es obligatorio",
								},
								minLength: {
									value: 8,
									message: "Tu contraseña debe tener mínimo 8 caracteres",
								},
								validate: (value) =>
									value === password.current || "Las contraseñas no coinciden",
							})}
						/>
						<Label>{errors?.password2?.message}</Label>
					</Div2>
					<Div2>
						<Input
							placeholder="Correo electrónico"
							type="email"
							name="email"
							ref={register({
								required: {
									value: true,
									message: "Este campo es obligatorio",
								},
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
									message: "El email no es válido",
								},
							})}
						/>
						<Label>{errors?.email?.message}</Label>
					</Div2>
					<Div2>
						<Input
							placeholder="Dirección"
							name="location"
							ref={register({
								required: {
									value: true,
									message: "Este campo es obligatorio",
								},
							})}
						/>
						<Label>{errors?.location?.message}</Label>
					</Div2>
					<Div4>
						<DivCheck>
							<InputCheck
								type="checkbox"
								name="terms"
								ref={register({
									required: {
										value: true,
										message: "Este campo es obligatorio",
									},
								})}
							/>
							<label style={{ color: "#fff" }} id="terms">
								Acepto los términos y condiciones
							</label>
						</DivCheck>
						<Label>{errors?.terms?.message}</Label>
					</Div4>
					<Button type="submit" value="Registrarse" />
					{loading ? <Spinner /> : null}
				</Form>
			</Div>
		</DivBackground>
	);
};

export default Register;
