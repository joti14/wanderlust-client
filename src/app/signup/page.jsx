'use client';
import { authClient } from '@/lib/auth-client';
import { Button, Card, Description, FieldError, Form, Input, Label, Separator, TextField } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';

const SignUpPage = () => {
    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());
        // console.log(user);

        const { data, error } = await authClient.signUp.email({
            email: user.email,
            password: user.password,
            name: user.name,
            image: user.image,
            callbackURL: "/"
        })

        if (data) {
            router.push('/');
            router.refresh();
        }
        if (error) {
            alert('Error')
        }

    };

    const handleGoogleSignin = async () => {
        await authClient.signIn.social({
            provider: "google",
        })
    }

    return (
        <div className='max-w-7xl mx-auto'>
            <h2 className='text-2xl font-bold text-center mt-5'>Create Account</h2>
            <p className='text-gray-500 text-center mb-5'>Start your adventure with Wanderlust</p>
            <Card className='border rounded-none mb-20'>
                <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
                    <TextField
                        isRequired
                        name="name"
                        type="text"
                    >
                        <Label>Name</Label>
                        <Input placeholder="Enter your name" />
                        <FieldError />
                    </TextField>
                    <TextField
                        name="image"
                        type="url"
                    >
                        <Label>Image URL</Label>
                        <Input placeholder="Enter your image URL" />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input placeholder="john@example.com" />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" />
                        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                        <FieldError />
                    </TextField>
                    <div className="flex justify-center gap-2">
                        <Button className={'w-full rounded-none bg-cyan-500'} type="submit">
                            Create Account
                        </Button>
                    </div>
                </Form>
                <div className='flex justify-center items-center gap-3'>
                    <Separator />
                    <div className='whitespace-nowrap'>Or sign up with</div>
                    <Separator />
                </div>
                <div>
                    <Button onClick={handleGoogleSignin} variant='outline' className={'w-full rounded-none'}>
                        <FcGoogle />
                        Sign in with Google
                    </Button>
                </div>
            </Card>
        </div>
    );
};

export default SignUpPage;