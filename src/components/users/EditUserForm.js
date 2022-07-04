import React, { memo } from "react";
import { Container } from "react-bootstrap";
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import isMobilePhone from "validator/lib/isMobilePhone";
import {
    REQUIRED_MESSAGE,
    MIN_LENGTH_MESSAGE,
    PASSWORD_CONFIRMATION_MESSAGE
} from "../../commons/constants";


const editShema = yup.object({
    name: yup.string().required(REQUIRED_MESSAGE),
    password: yup.string().required(REQUIRED_MESSAGE).min(6, MIN_LENGTH_MESSAGE(6)),
    confirmedPassword: yup.string().required(REQUIRED_MESSAGE).min(6, MIN_LENGTH_MESSAGE(6))
        .oneOf([yup.ref('password'), null], PASSWORD_CONFIRMATION_MESSAGE),
    phoneNumber: yup.string().required(REQUIRED_MESSAGE).test(
        'phoneNumber',
        ({value: phoneNumber}) => `${phoneNumber} is not a phone format`,
        (value) => isMobilePhone(value))
})

const EditUserForm = ({user, isUpdatingUser, onSubmit}) => {
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(editShema) });

    console.log('render EditUserForm');

    return <>
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row mb-3">
                    <div className="col col-sm-5">
                        <div className="form-group">
                            <label className="form-label">Email</label>
                            <input
                                type="text"
                                placeholder={user.email}
                                disabled
                                className="form-control"
                            />
                        </div>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col col-sm-5">
                        <div className="form-group">
                            <label className="form-label">Name</label>
                            <input
                                name="name"
                                type="text"
                                {...register('name')}
                                defaultValue={user.name}
                                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                            />
                            <div className="invalid-feedback">{errors.name?.message}</div>
                        </div>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col col-sm-5">
                        <div className="form-group">
                            <label className="form-label">Password</label>
                            <input
                                name="password"
                                type="text"
                                {...register('password')}
                                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                            />
                            <div className="invalid-feedback">{errors.password?.message}</div>
                        </div>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col col-sm-5">
                        <div className="form-group">
                            <label className="form-label">Confirmed Password</label>
                            <input
                                name="confirmedPassword"
                                type="text"
                                {...register('confirmedPassword')}
                                className={`form-control ${errors.confirmedPassword ? 'is-invalid' : ''}`}
                            />
                            <div className="invalid-feedback">{errors.confirmedPassword?.message}</div>
                        </div>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col col-sm-5">
                        <div className="form-group">
                            <label className="form-label">Phone Number</label>
                            <input
                                name="phoneNumber"
                                type="text"
                                {...register('phoneNumber')}
                                defaultValue={user.phoneNumber}
                                className={`form-control ${errors.phoneNumber ? 'is-invalid' : ''}`}
                            />
                            <div className="invalid-feedback">{errors.phoneNumber?.message}</div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col col-sm-5">
                        <div className="form-group">
                            <button type="submit" className={`btn btn-primary ${isUpdatingUser? 'disabled': ''}`}>
                                Update User
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </Container>
    </>

}

export default memo(EditUserForm);