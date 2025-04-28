"use client"

import axios from 'axios';
import * as Yup from 'yup'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react'

const DonerRegister = () => {
  const primaryColor = 'bg-gradient-to-br from-red-500 to-pink-500';
  const primaryHoverColor = 'hover:bg-gradient-to-br from-red-600 to-pink-600';
  const primaryTextColor = 'text-red-600';
  const inputFocusColor = 'focus:border-pink-500 focus:ring-pink-500';

  const initialValues = {
    name: '',
    email: '',
    password: '',
    bloodGroup: '',
    gender: '',
    dateOfBirth: '',
    phoneNumber: '',
    address: '',
    city: '',
    province: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Full Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    bloodGroup: Yup.string().required('Blood Group is required').oneOf(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'], 'Invalid Blood Group'),
    gender: Yup.string().required('Gender is required').oneOf(['Male', 'Female', 'Other'], 'Invalid Gender'),
    dateOfBirth: Yup.date().required('Date of Birth is required'),
    phoneNumber: Yup.string()
      .matches(/^[0-9]+$/, 'Must be only digits')
      .min(10, 'Phone number must be at least 10 digits')
      .max(15, 'Phone number cannot exceed 15 digits')
      .required('Phone number is required'),
    address: Yup.string().required('Address is required'),
    city: Yup.string().required('City is required'),
    province: Yup.string().required('Province is required'),
  });

  const onSubmit = async (values) => {
    try {
      const response = await axios.post(`http://localhost:8000/donor`, values); // Assuming your backend route is just '/donor' now
      console.log(response.data);
      // Optionally, redirect the user or reset the form
    } catch (error) {
      console.error("Error registering donor:", error);
      // Handle the error (e.g., show an error message to the user)
    }
  };

  return (
    <>
      <Head>
        <title>Blood Donor Register | Jatra</title>
      </Head>
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-4">
        <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg relative overflow-hidden border border-gray-200">
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,.03)_0%,rgba(0,0,0,.05)_50%,transparent_70%)] z-0"></div>

          {/* Animated Blood Drop Logo */}
          <div className="flex justify-center mb-8 z-10 relative animate-bounce">
            <Image
              src={"/blood-drop.png"} // Replace with a beautiful blood drop icon
              alt={"blood donation"}
              width={70}
              height={70}
            />
          </div>

          <h2 className={`${'mb-6 text-center text-3xl font-semibold ' + primaryTextColor} z-10 relative`}>
            Become a Blood Donor
          </h2>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-6 z-10 relative">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    className={`${'mt-1 w-full rounded-md border border-gray-300 p-3 shadow-sm ' + inputFocusColor}`}
                    placeholder="Your name"
                  />
                  <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className={`${'mt-1 w-full rounded-md border border-gray-300 p-3 shadow-sm ' + inputFocusColor}`}
                    placeholder="you@example.com"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    className={`${'mt-1 w-full rounded-md border border-gray-300 p-3 shadow-sm ' + inputFocusColor}`}
                    placeholder="••••••••"
                  />
                  <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div>
                  <label htmlFor="bloodGroup" className="block text-sm font-medium text-gray-700">
                    Blood Group
                  </label>
                  <Field as="select" id="bloodGroup" name="bloodGroup" className={`${'mt-1 w-full rounded-md border border-gray-300 p-3 shadow-sm ' + inputFocusColor}`}>
                    <option value="">Select Blood Group</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </Field>
                  <ErrorMessage name="bloodGroup" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div>
                  <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                    Gender
                  </label>
                  <Field as="select" id="gender" name="gender" className={`${'mt-1 w-full rounded-md border border-gray-300 p-3 shadow-sm ' + inputFocusColor}`}>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </Field>
                  <ErrorMessage name="gender" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div>
                  <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">
                    Date of Birth
                  </label>
                  <Field type="date" id="dateOfBirth" name="dateOfBirth" className={`${'mt-1 w-full rounded-md border border-gray-300 p-3 shadow-sm ' + inputFocusColor}`} />
                  <ErrorMessage name="dateOfBirth" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <Field
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    className={`${'mt-1 w-full rounded-md border border-gray-300 p-3 shadow-sm ' + inputFocusColor}`}
                    placeholder="98XXXXXXXX"
                  />
                  <ErrorMessage name="phoneNumber" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                    Address
                  </label>
                  <Field
                    as="textarea"
                    id="address"
                    name="address"
                    rows={3}
                    className={`${'mt-1 w-full rounded-md border border-gray-300 p-3 shadow-sm ' + inputFocusColor}`}
                    placeholder="Your current address"
                  />
                  <ErrorMessage name="address" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                    City
                  </label>
                  <Field
                    type="text"
                    id="city"
                    name="city"
                    className={`${'mt-1 w-full rounded-md border border-gray-300 p-3 shadow-sm ' + inputFocusColor}`}
                    placeholder="Your city"
                  />
                  <ErrorMessage name="city" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div>
                  <label htmlFor="province" className="block text-sm font-medium text-gray-700">
                    Province
                  </label>
                  <Field
                    type="text"
                    id="province"
                    name="province"
                    className={`${'mt-1 w-full rounded-md border border-gray-300 p-3 shadow-sm ' + inputFocusColor}`}
                    placeholder="Your province"
                  />
                  <ErrorMessage name="province" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <button
                  type="submit"
                  className={`${'w-full rounded-full ' + primaryColor + ' px-6 py-3 text-white font-semibold shadow-md ' + primaryHoverColor + ' transition-all duration-300'}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Registering...' : 'Register as Donor'}
                </button>
              </Form>
            )}
          </Formik>

          <p className="mt-6 text-center text-sm text-gray-600 z-10 relative">
            Already a donor?{' '}
            <a href="/login" className={`${primaryTextColor} hover:underline font-semibold`}>
              Sign in
            </a>
          </p>
        </div>
      </div>
    </>
  )
}

export default DonerRegister;