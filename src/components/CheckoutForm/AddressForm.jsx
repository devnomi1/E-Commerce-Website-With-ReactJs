import React from "react";
import {
	InputLabel,
	Grid,
	Select,
	MenuItem,
	Button,
	Typography,
} from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import FormInput from "./CustomTextField";

function AddressForm() {
 const methods = useForm()
	const submit = (e) => {
		e.preventDefault();
    };
    

	return (
		<>
			<Typography variant="h6" gutterBottom>
				Shipping Address
			</Typography>
			<FormProvider {...methods} >
				<form onSubmit={submit}>
                    <Grid container spacing={3}>
                        <FormInput required name="firstName" label="First name"/>
                    </Grid>
				</form>
			</FormProvider>
		</>
	);
}

export default AddressForm;
