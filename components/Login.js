import React, { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Link from "next/link";
import styled from "styled-components";
import Spinner from "./Spinner";
import swal from "sweetalert";

const Input = styled.input`
	width: 100%;
	font-size: 17px;
	outline: none;
	padding: 13px;

	@media (max-width: 321px) {
		padding: 8px;
	}
`;

const Form = styled.form`
	display: grid;
	grid-gap: 2rem;
	justify-items: center;
`;

const Button = styled.input`
	padding: 5px 158px;
	font-size: 25px;
	background: #0c56cc;
	color: #fff;
	outline: none;
	border: none;
	cursor: pointer;

	@media (max-width: 376px) {
		padding: 5px 133px;
	}

	@media (max-width: 321px) {
		padding: 5px 109px;
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
	width: 100%;
`;

const Div3 = styled.div`
	display: flex;
`;

const Label = styled.p`
	margin-top: 3px;
	color: red;
	font-size: 17px;

	@media (max-width: 321px) {
		font-size: 14px;
	}
`;

const P2 = styled.p`
	margin-right: 5px;
`;

const Login = () => {
	const [loading, setLoading] = useState(null);
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
		setLoading(true);
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
				setLoading(false);
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
								message: "El email no es válido",
							},
						})}
					/>
					<Label>{errors?.email?.message}</Label>
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
				<Button type="submit" value="Ingresar" />
				<Div3>
					<P2>¿Aún no tienes cuenta?</P2>
					<Link href="/Register">
						<a>Crea tu cuenta ahora</a>
					</Link>
				</Div3>
				{loading ? <Spinner /> : null}
			</Form>
		</Div>
	);
};

export default Login;
