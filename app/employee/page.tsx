import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const EmployeePage = () => {
    return (
        <div className='flex flex-col gap-4 mt-4 h-screen justify-center max-w-[1280px] items-center'>
            <h1 className='text-4xl font-bold text-center'>
                CRUD Operation Using NextJS 14,Prisma,Postgrel
            </h1>
            <Button asChild>
                <Link href={'/employee/create'}>
                    Create
                </Link>
            </Button>




        </div>
    )
}

export default EmployeePage