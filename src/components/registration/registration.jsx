import { useState } from "react"





const CustomRegistration = () => {

    const [form, setForm] = useState({
        name: "",
        password: "",
        confrimPassword: "",
        mobile: ""
    })

    const [formErr, setFormErr] = useState({
        nameErr: "",
        passwordErr: "",
        confrimPassword: "",
        mobileErr: ""
    })

    const clickToChange = (event) => {

        const { name, value } = event.target

        setForm(pre => ({
            ...pre, [name]: value
        }))

    }

    const validate = () => {
        const error = {
            nameErr: "",
            passwordErr: "",
            confrimPassword: "",
            mobileErr: ""
        }

        if (!form.mobile) {
            error.nameErr = "Enter the name"
        }
        if (!form.password) {
            error.passwordErr = "Enter the password"
        } else if (!/^[A-Z][a-z][0-9].{9}$/.test(form.password)) {
            error.passwordErr = "Enter the valid password"
        }
        if (form.password !== form.confrimPassword) {
            error.confrimPassword = "confrim the password"
        }
        if (!form.mobile) {
            error.mobileErr = "Enter the mobile number"
        } else if (!/[6-9][0-9]{9}$/.test(form.mobile)) {
            error.mobileErr = "Enter the valid mobile number"
        }
        return error
    }

    const onSubmit = (event) => {

        event.preventDefault()

        const error = validate()

        if (error.nameErr || error.passwordErr || error.mobileErr) {
            setFormErr(error)
        } else {
            //hit api
        }



    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" name="name" value={form.name} onChange={clickToChange} />
                {formErr.nameErr && <span>{formErr.nameErr}</span>}
                <input type="text" name="password" value={form.password} onChange={clickToChange} />
                {formErr.passwordErr && <span>{formErr.passwordErr}</span>}
                <input type="text" name="confrimPassword" value={form.confrimPassword} onChange={clickToChange} />
                {formErr.confrimPassword && <span>{formErr.confrimPassword}</span>}
                <input type="text" name="mobile" value={form.mobile} onChange={clickToChange} />
                {formErr.mobileErr && <span>{formErr.mobileErr}</span>}
                <button>submit</button>
            </form>
        </div>
    )
}
export default CustomRegistration