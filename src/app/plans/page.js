'use client'
import { addAmount, createPaymentApi, getAmoutListApi, getTransactionHistoryApi } from '@/redux/api/amount'
import { Modal, Space, Table } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import crypto from 'crypto-js'; // For client-side hashing, but prefer to handle on the backend
import { Buffer } from 'buffer';
import Navbar from '../../components/navbar'
import CollapsibleDataTable from '../../components/accordianTable'
import { Box, Button } from '@mui/material'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie';
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from 'react-redux'
import Footer from '../../components/footer'


const amountSchema = Yup.object().shape({
    amount: Yup.number()
        .required("Amount is required"),
});

const Page = () => {

    const router = useRouter()
    const loginState = useSelector((state) => state.login);


    const amountFormik = useFormik({
        initialValues: {
            amount: '',
        },
        validationSchema: amountSchema,
        onSubmit: async (values, { resetForm }) => {
            setIsLoading(true)
            try {
                const data = await addAmount(values)
                console.log('amountSchema Values:', data.data);
                if (data.data) {

                    // setCurrentStep(2)
                    setIsLoading(false)
                    getAmountList()
                    setModalOpen(false)
                    resetForm()
                    console.log('amountSchema Status:', data.status)
                }
            }
            catch (errors) {
                setIsLoading(false)
                console.log('Errors:', errors);
            }
        }
    });

    const [investmentData, setinvestmentData] = useState([])
    const [transactionData, setTransactionData] = useState([])
    const [modalOpen, setModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoading1, setIsLoading1] = useState(false);
    const [tableData, setTableData] = useState({ column: [], row: [] });


    const getAmountList = async () => {
        setIsLoading(true)
        try {
            const data = await getAmoutListApi()
            console.log('amountSchema Values:', data.data);
            if (data.status) {
                const column = [
                    { header: "Amount", accessor: "amount", align: "left", sortable: true },
                    { header: "Start Date", accessor: "startDate", align: "center" },
                    { header: "End Date", accessor: "endDate", align: "center" },
                    { header: "Total Payable Amount", accessor: "totalAmountPayable", align: "center", sortable: true },
                    { header: "", accessor: "", align: "center" },
                ]

                const row = data.data?.map((val) => {
                    return {
                        id: val?._id,
                        startDate: val?.startDate || "-",
                        endDate: val?.endDate,
                        totalAmountPayable: val?.totalAmountPayable,
                        amount: val?.amount,

                    }
                })

                // setCurrentStep(2)
                setinvestmentData(data.data)
                setTableData({ column, row })
                setModalOpen(false)
                setIsLoading(false)
                console.log('amountSchema Status:', data.status)
            }
        }
        catch (errors) {
            setIsLoading(false)
            console.log('Errors:', errors);
        }
    }

    const handleTransitionList = async (id) => {
        setIsLoading1(true)
        setTransactionData([])

        try {
            const res = await getTransactionHistoryApi(id)
            setTransactionData(res?.data?.transactions)
            setIsLoading1(false)
        } catch (error) {
            setIsLoading1(false)
            console.log('Error:', error);
        }
    }

    useEffect(() => {
        console.log('amountSchema Status:')
        getAmountList();
    }, [])


    // "amount": 10000,
    //         "startDate": "2024-09-29",
    //         "endDate": "2025-09-29",
    //         "totalAmountPayable": 120000,


    const handlePlan = () => {
        setModalOpen(true)
    }

    useEffect(() => {
        const authToken = Cookies.get('authToken');
        if (!authToken) {
            router.push('/login');
        }
    }, [router]);

    const handlePayment = async (id, amount) => {
        console.log('data received', id)
        try {
            const payload = {
                name: loginState?.data?.user?.fullName ?? "savan",
                amount: amount,
                phone: String(loginState?.data?.user?.phoneNumber ?? 1234567890),
                planId: id
            }
            console.log('data received', payload)

            const res = await createPaymentApi(payload)
            if (res.success) {
                const redirectUrl = res.data.instrumentResponse.redirectInfo.url
                router.replace(redirectUrl)
            }
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='!overflow-x-hidden '>
            <Navbar />
            <div className=' mt-[80px] text-[--black_text]  bg-gray-50 !overflow-x-hidden '>
                <div className=" bg-[#272727] py-4">
                    <div className='w-[90%] mx-auto flex justify-between items-center'>
                    <p className='md:text-xl text-lg font-medium md:font-semibold text-[--white] '>Your Total Investment : 1000</p>
                    <button onClick={handlePlan} className='flex justify-center items-center md:px-10 px-6 py-2 rounded-[10px] bg-[--secondary] text-white  font-medium whitespace-nowrap '> Add Plan</button>
                </div>
                </div>

                <div className='px-10 my-10'>
                    <CollapsibleDataTable
                        table={{ columns: tableData.column, rows: tableData.row }} {...{ handlePayment, isLoading, handleTransitionList, isLoading1, transactionData }}
                    // isLoading={isLoading}
                    // filteredBookings={filteredBookings}
                    />
                </div>
                <Modal
                    title={<div style={{ color: 'black', fontSize: '20px', fontWeight: 'bold' }}>Add Plan</div>}
                    centered
                    open={modalOpen}
                    onCancel={() => setModalOpen(false)}
                    footer={[
                        <button key="back" onClick={() => setModalOpen(false)} className='border mr-4 rounded-md bg-white px-4 py-2' >
                            Cancel
                        </button>,
                        <button key="submit" type="primary" onClick={amountFormik.handleSubmit
                        } className='bg-[--secondary] rounded-md px-4 py-2 text-white font-medium'>
                            Submit
                        </button>,
                    ]}
                >
                    {/* <label for="amount" className="block mb-2 text-sm font-medium text-gray-900 ">Add Funds</label> */}
                    <input type="amount" name="amount" id="amount" className="bg-gray-50 border border-gray-300 text-[--black_text] text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 " placeholder="Enter amount"
                        onChange={amountFormik.handleChange}
                        onBlur={amountFormik.handleBlur}
                        value={amountFormik.values.amount}
                    />
                    {amountFormik.touched.amount && amountFormik.errors.amount ? (
                        <div className="text-red-500 text-sm">{amountFormik.errors.amount}</div>
                    ) : null}
                </Modal>
            </div >
            <Footer/>
        </div>
    )
}

export default Page
