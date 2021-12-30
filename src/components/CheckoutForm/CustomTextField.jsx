import React from "react";
import { TextField, Grid } from "@material-ui/core";
import { useFormContext, Controller } from "react-hook-form";

function FormInput({ name, label, required }) {
	const { control } = useFormContext();
	const isError = false;
	return (
		<Grid item xs={12} sm={6}>
			<Controller
				render={({ field }) => <TextField fullWidth label={label} required />}
				name={name}
				control={control}
				error={isError}
			/>
		</Grid>
	);
}

export default FormInput;
