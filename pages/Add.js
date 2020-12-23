import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Header from "../components/Header";
import swal from "sweetalert";
import styled from "styled-components";
import Aside from "../components/Aside";
import { useRouter } from "next/router";

const Container = styled.div`
	display: grid;
	grid-template-columns: 17% 83%;

	@media (max-width: 426px) {
		grid-template-columns: 100%;
	}

	@media (min-height: 1365px) {
		grid-template-columns: 100%;
	}
`;

const Select = styled.select`
	width: 95%;
`;

const Div = styled.div`
	width: 80%;
	margin: 0 auto;
`;

const Form = styled.form`
	display: grid;
	grid-gap: 10px;
	margin-top: 25px;
	grid-template-columns: 50% 50%;
`;

const Input = styled.input`
	width: 95%;
	padding: 10px;
`;

const H1 = styled.h1`
	text-align: center;
	margin-top: 12px;
`;

const Label = styled.p`
	margin-top: 3px;
	color: red;
	font-size: 13px;
`;

const handleHeader = () => {
	try {
		if (localStorage.getItem("log_name")) {
			return "Hola, " + localStorage.getItem("log_name");
		}
	} catch (error) {
		return "Inicia sesión";
	}
};

const Add = () => {
	const router = useRouter();
	const [status, setStatus] = useState(false);

	const { register, handleSubmit, errors } = useForm();

	const errorAlert = () => {
		swal({
			title: "Inicia sesión para añadir el producto",
			icon: "error",
			buttons: {
				continue: "Continuar",
				login: "Iniciar sesión",
			},
		}).then((value) => {
			switch (value) {
				case "continue":
					break;

				case "login":
					router.push("/");
			}
		});
	};

	const successAlert = () => {
		swal({
			title: "Tu producto ha sido añadido con éxito",
			icon: "success",
			buttons: "Continuar",
		});
	};

	const onSubmit = async (data) => {
		setStatus(true);
		data.status = status;
		data.user_id = localStorage.getItem("log_id");
		console.log(data);

		const url = "http://165.22.1.82:3000/api/products/createProduct";

		let request = await fetch(url, {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
		let res = await request.json();
		if (!res.error) {
			successAlert();
		} else {
			errorAlert();
		}
	};

	return (
		<div>
			<Header name={handleHeader()} />
			<Container>
				<Aside />
				<Div>
					<H1>Añadir Producto</H1>
					<Form onSubmit={handleSubmit(onSubmit)}>
						<div>
							<Input
								name="name"
								placeholder="Nombre del producto"
								ref={register({
									required: {
										value: true,
										message: "Este campo es obligatorio",
									},
								})}
							/>
							<Label>{errors?.name?.message}</Label>
						</div>
						<div>
							<Input
								name="price"
								placeholder="Precio"
								type="number"
								ref={register({
									required: {
										value: true,
										message: "Este campo es obligatorio",
									},
								})}
							/>
							<Label>{errors?.price?.message}</Label>
						</div>
						<div>
							<Input
								name="description"
								placeholder="Descripción"
								ref={register({
									required: {
										value: true,
										message: "Este campo es obligatorio",
									},
									maxLength: {
										value: 140,
										message: "Solo puedes escribir 140 caracteres",
									},
								})}
							/>
							<Label>{errors?.description?.message}</Label>
						</div>
						<div>
							<Input
								name="picture"
								type="url"
								placeholder="Imagen (URL)"
								ref={register({
									required: {
										value: true,
										message: "Este campo es obligatorio",
									},
									pattern: {
										value:
											"[Hh][Tt][Tt][Pp][Ss]?://(?:(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)(?:.(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)*(?:.(?:[a-zA-Z\u00a1-\uffff]{2,}))(?::d{2,5})?(?:/[^s]*)?",
										message: "Debe introducir una url válida",
									},
								})}
							/>
							<Label>{errors?.picture?.message}</Label>
						</div>
						<Select
							name="categorie"
							ref={register({
								required: {
									value: true,
									message: "Este campo es obligatorio",
								},
							})}
						>
							<option>Refrescos</option>
							<option>Licores</option>
							<option>Lacteos</option>
							<option>Alimentos</option>
							<option>Carnes</option>
							<option>Limpieza</option>
						</Select>
						<Input type="submit" value="Añadir" style={{ cursor: "pointer" }} />
					</Form>
				</Div>
			</Container>
		</div>
	);
};

export default Add;
