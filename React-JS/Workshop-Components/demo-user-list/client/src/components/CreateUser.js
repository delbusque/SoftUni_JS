import * as userService from '../services/userService.js'
import { useState } from 'react';

export const CreateUser = ({ newUserHandler, setUsers }) => {

    const [errors, setErrors] = useState({});

    const errorHandler = (e, limit) => {
        setErrors(oldErrors => ({
            ...oldErrors,
            [e.target.name]: values[e.target.name].length < limit
        }))
    }

    const isFormValid = !Object.values(errors).some(e => e);


    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        imageUrl: '',
        country: '',
        city: '',
        street: '',
        streetNumber: '',
    });

    const { firstName, lastName, email, phoneNumber, imageUrl, ...address } = values;
    const newUser = {
        firstName,
        lastName,
        email,
        phoneNumber,
        imageUrl,
        address
    }

    const onChangeHandler = (e) => {
        setValues(oldValues => ({
            ...oldValues,
            [e.target['name']]: e.target['value']
        }))
    }

    const submitHandler = (e) => {
        e.preventDefault();

        userService.addUser(newUser).then(user => {

            userService.getAll().then(
                data => {
                    setUsers(data.users)
                }
            )
            newUserHandler();
        }).catch(err => console.log(err.message))
    }

    return (
        <div className="overlay">
            <div className="backdrop" onClick={newUserHandler}></div>
            <div className="modal">
                <div className="user-container">
                    <header className="headers">
                        <h2>Add User</h2>
                        <button className="btn close" onClick={newUserHandler}>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark"
                                className="svg-inline--fa fa-xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path fill="currentColor"
                                    d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z">
                                </path>
                            </svg>
                        </button>
                    </header>
                    <form onSubmit={submitHandler}>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="firstName">First name</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-user"></i></span>
                                    <input id="firstName" name="firstName" type="text" onBlur={(e) => errorHandler(e, 3)}
                                        value={values.firstName} onChange={onChangeHandler} />
                                </div>
                                {errors.firstName &&
                                    <p className="form-error">
                                        First name should be at least 3 characters long!
                                    </p>
                                }
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last name</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-user"></i></span>
                                    <input id="lastName" name="lastName" type="text" onBlur={(e) => errorHandler(e, 3)}
                                        value={values.lastName} onChange={onChangeHandler} />
                                </div>
                                {errors.lastName && <p className="form-error">
                                    Last name should be at least 3 characters long!
                                </p>}

                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-envelope"></i></span>
                                    <input id="email" name="email" type="text" onBlur={(e) => errorHandler(e, 5)}
                                        value={values.email} onChange={onChangeHandler} />
                                </div>
                                {errors.email && <p className="form-error">Email is not valid!</p>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="phoneNumber">Phone number</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-phone"></i></span>
                                    <input id="phoneNumber" name="phoneNumber" type="text" onBlur={(e) => errorHandler(e, 10)}
                                        value={values.phoneNumber} onChange={onChangeHandler} />
                                </div>
                                {errors.phoneNumber && <p className="form-error">Phone number is not valid!</p>}
                            </div>
                        </div>

                        <div className="form-group long-line">
                            <label htmlFor="imageUrl">Image Url</label>
                            <div className="input-wrapper">
                                <span><i className="fa-solid fa-image"></i></span>
                                <input id="imageUrl" name="imageUrl" type="text" onBlur={(e) => errorHandler(e, 7)}
                                    value={values.imageUrl} onChange={onChangeHandler} />
                            </div>
                            {errors.imageUrl && <p className="form-error">ImageUrl is not valid!</p>}
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="country">Country</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-map"></i></span>
                                    <input id="country" name="country" type="text" onBlur={(e) => errorHandler(e, 2)}
                                        value={values.country} onChange={onChangeHandler} />
                                </div>
                                {errors.country && <p className="form-error">
                                    Country should be at least 2 characters long!
                                </p>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="city">City</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-city"></i></span>
                                    <input id="city" name="city" type="text" onBlur={(e) => errorHandler(e, 3)}
                                        value={values.city} onChange={onChangeHandler} />
                                </div>
                                {errors.city && <p className="form-error">
                                    City should be at least 3 characters long!
                                </p>}
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="street">Street</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-map"></i></span>
                                    <input id="street" name="street" type="text" onBlur={(e) => errorHandler(e, 3)}
                                        value={values.street} onChange={onChangeHandler} />
                                </div>
                                {errors.street && <p className="form-error">
                                    Street should be at least 3 characters long!
                                </p>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="streetNumber">Street number</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-house-chimney"></i></span>
                                    <input id="streetNumber" name="streetNumber" type="text" onBlur={(e) => errorHandler(e, 1)}
                                        value={values.streetNumber} onChange={onChangeHandler} />
                                </div>
                                {errors.streetNumber && <p className="form-error">
                                    Street number should be a positive number!
                                </p>}
                            </div>
                        </div>
                        <div id="form-actions">
                            <button id="action-save" className="btn" type="submit"
                                disabled={!isFormValid}>Save</button>
                            <button id="action-cancel" className="btn" type="button" onClick={newUserHandler}>
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}