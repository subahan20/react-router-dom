import { useState } from "react"

const CustomLogin = () => {

    const [form, setForm] = useState({
        name: "",
        password: ""
    })

    const [formErr, setFormErr] = useState({
        nameErr: "",
        passwordErr: ""
    })

    const clickToChange = (event) => {
        const { name, value } = event.target

        setForm(pre=>({
            ...pre,[name]:value
        }))
    }

    const validate = () => {
        let error = {
            nameErr: "",
            passwordErr: ""
        }

        if (!form.name) {
            error.nameErr = "Enter the name"
        }
        if (!form.password) {
            error.passwordErr = "Enter the password"
        } else if (/^[A-Z][a-z][0-9].{9}$/.test(form.password)) {
            error.passwordErr = "Enter valid password"
        }
        return error
    }

    const onSubmit = (event) => {

        event.preventDefault()

        const errors = validate(form)

        if (errors.nameErr || errors.passwordErr) {
            setFormErr(errors)
        } else {
            //hit the api
        }

    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="mb-3 mt-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input
                        type="type"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                        name="name"
                        value={form.name}
                        onChange={clickToChange}
                    />
                    {formErr.nameErr && <div className="text-danger">{formErr.nameErr}</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="pwd" className="form-label">Password:</label>
                    <input
                        type="password"
                        className="form-control"
                        id="pwd"
                        placeholder="Enter password"
                        name="password"
                        value={form.password}
                        onChange={clickToChange}
                    />
                    {formErr.passwordErr && <div className="text-danger">{formErr.passwordErr}</div>}
                </div>
                <div className="form-check mb-3">
                    <label className="form-check-label">
                        <input className="form-check-input" type="checkbox" name="remember" /> Remember me
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default CustomLogin
