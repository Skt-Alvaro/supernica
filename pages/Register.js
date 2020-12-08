import React, { useState, useRef } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Header from "../components/Header";
import styled from "styled-components";

const Div = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 10%;

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
		display: block;
	}
`;

const Input = styled.input`
	width: 100%;
	padding: 10px;
	font-size: 15px;
	margin-bottom: 3px;
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
	@media (max-width: 769px) {
		margin-bottom: 15px;
	}
`;

const Div2 = styled.div`
	@media (max-width: 769px) {
		margin-bottom: 20px;
	}
`;

const Div3 = styled.div`
	display: flex;
	align-items: center;
	grid-column: 1 / span 2;
	justify-content: center;
`;

const Div4 = styled.div`
	display: flex;
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

const Register = () => {
	const router = useRouter();
	const [loading, setLoading] = useState(null);
	const { register, handleSubmit, errors, watch } = useForm();
	const password = useRef({});
	password.current = watch("password", "");

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<div>
			<Header />
			<Div>
				<Form onSubmit={handleSubmit(onSubmit)}>
					<Div3>
						<H1>Registro</H1>
					</Div3>
					<Div2>
						<Input
							placeholder="Nombre"
							name="name"
							ref={register({
								required: {
									value: true,
									message: "Este campo es obligatorio",
								},
							})}
						/>
						<Label>{errors?.name?.message}</Label>
					</Div2>
					<Div2>
						<Input
							placeholder="Apellido"
							name="last_name"
							ref={register({
								required: {
									value: true,
									message: "Este campo es obligatorio",
								},
							})}
						/>
						<Label>{errors?.last_name?.message}</Label>
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
							name="place"
							ref={register({
								required: {
									value: true,
									message: "Este campo es obligatorio",
								},
							})}
						/>
						<Label>{errors?.place?.message}</Label>
					</Div2>
					<Div4>
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
						<label id="terms">Acepto los términos y condiciones</label>
						<Label>{errors?.terms?.message}</Label>
					</Div4>
					<Button type="submit" value="Registrarse" />
				</Form>
			</Div>
		</div>
	);
};

export default Register;
