import React, { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import swal from "sweetalert";

const Input = styled.input`
	padding: 15px 193px 15px 9px;
	font-size: 17px;
	outline: none;
	border: 1px solid #989898;

	@media (max-width: 376px) {
		padding: 15px 140px 15px 9px;
	}

	@media (max-width: 321px) {
		padding: 15px 100px 15px 9px;
	}
`;

const Form = styled.form`
	display: grid;
	grid-gap: 2rem;
	justify-items: center;
`;

const Button = styled.button`
	padding: 5px 120px;
	font-size: 25px;
	background: #0c56cc;
	color: #fff;
	outline: none;
	border: none;
	cursor: pointer;

	@media (max-width: 376px) {
		padding: 5px 96px;
	}

	@media (max-width: 321px) {
		padding: 5px 76px;
	}
`;

const H1 = styled.h1`
	margin-bottom: 5%;
`;

const Div = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 20%;

	@media (max-width: 768px) {
		margin-top: 3%;
		padding-bottom: 50px;
	}

	@media (min-height: 1367px) {
		margin-top: 0;
	}
`;

const Div2 = styled.div`
	display: grid;
`;

const Label = styled.label`
	margin-top: 5px;
	color: red;
	font-size: 17px;
`;

const Login = () => {
	const [valid, setValid] = useState(false);
	const { register, handleSubmit, errors } = useForm();

	const newAlert = () => {
		swal({
			title: "El correo y la contraseña son incorrectos",
			icon: "error",
			buttons: "Continuar",
		});
	};

	const router = useRouter();

	const onSubmit = async (data) => {
		console.log("data is reaedy to sent");
		console.log(data);

		const url = "https://reqres.in/api/login";

		// const infoParaEntrar = {
		// 	email: "eve.holt@reqres.in",
		// 	password: "cityslicka",
		// };

		let request = await fetch(url, {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.token) {
					router.push("/Store");
				} else {
					newAlert();
				}
			});
	};
	return (
		<Div>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<H1>Ingresa tu cuenta</H1>
				<Div2>
					<Input
						placeholder="Correo Electrónico"
						name="email"
						ref={register({
							required: {
								value: true,
								message: "Este campo es obligatorio",
							},
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: "Mete un email válido",
							},
						})}
					/>
					<Label>{errors?.email?.message}</Label>
				</Div2>
				<Div2>
					<Input
						placeholder="Contraseña"
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
				<Button onClick={() => setValid(null)} type="submit">
					Iniciar sesión
				</Button>
			</Form>
		</Div>
	);
};

export default Login;
