"use server";

import { db } from "@/lib/db";
import { EmployeeSchema } from "@/schemas";
import { z } from "zod"


export const createEmploye = async (values: z.infer<typeof EmployeeSchema>) => {

    console.log(values);

    const employee = await db.employee.create({
        data: {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            PhoneNumber: values.PhoneNumber,
        }

    })
    console.log(employee);
}