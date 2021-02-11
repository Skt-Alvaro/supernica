import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { loginAction } from "../store/actions/loginAction";
import { useDispatch } from "react-redux";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";

const Login = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = async (data) => {
        let { error } = await dispatch(loginAction(data));

        if (error) {
            swal({
                title: "El correo y la contraseña son incorrectos",
                icon: "error",
                buttons: "Continuar",
            });
        } else {
            history.push("/store");
        }
    };

    return (
        <Div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <H1>Ingresa tu cuenta</H1>
                <div>
                    <Input
                        type="email"
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
                    <label style={{ color: "red" }}>
                        {errors?.email?.message}
                    </label>
                </div>
                <div>
                    <Input
                        type="password"
                        placeholder="Contraseña"
                        name="password"
                        ref={register({
                            required: {
                                value: true,
                                message: "Este campo es obligatorio",
                            },
                        })}
                    />
                    <label style={{ color: "red" }}>
                        {errors?.password?.message}
                    </label>
                </div>
                <Button type="submit">Iniciar sesión</Button>
            </Form>
        </Div>
    );
};

export default Login;

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
