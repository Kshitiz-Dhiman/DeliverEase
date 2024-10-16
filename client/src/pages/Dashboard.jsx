import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from '@/components/ui/textarea';
function DialogDemo() {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        price: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const postRequest = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:3000/api/requests', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(formData),
        });
        if (response.ok) {
            alert('Request submitted successfully');
            location.reload();
        } else {
            alert('Failed to submit request');
        }
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-black rounded-full">+</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Make your request</DialogTitle>
                </DialogHeader>
                <form onSubmit={postRequest}>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="title" className="text-right">
                                Title
                            </Label>
                            <Input
                                id="title"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="description" className="text-right">
                                Description
                            </Label>
                            <Textarea
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="price" className="text-right">
                                Price
                            </Label>
                            <Input
                                id="price"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                className="col-span-3"
                                type="number"
                            />
                        </div>
                    </div>
                    <Button type="submit" >Submit</Button>
                </form>
            </DialogContent>
        </Dialog>
    )
}
const Dashboard = () => {
    const [userData, setUserData] = useState(null);
    const [requests, setRequests] = useState([]);
    const [allrequests, setAllRequests] = useState([]);

    useEffect(() => {
        async function fetchUserData() {
            try {
                const response = await fetch("http://localhost:3000/api/user", {
                    method: "GET",
                    credentials: "include",
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                setUserData(data);
            } catch (error) {
                console.error("There was an error fetching the user data:", error);
            }

        }
        async function getRequest() {
            const response = await fetch("http://localhost:3000/api/requests", {
                method: 'GET',
                credentials: 'include'
            })
            const data = await response.json();
            setRequests(data);
        }
        async function allRequests() {
            const response = await fetch("http://localhost:3000/api/allrequests", {
                method: 'GET',
                credentials: 'include'
            })
            const data = await response.json();
            setAllRequests(data);
        }
        fetchUserData();
        getRequest();
        allRequests();
    }, []);

    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        <div className='min-h-screen w-full'>
            <Navbar />
            <div className='bg-[#131e2a] text-white min-h-[300px] p-5 md:p-20'>
                <h1 className='text-[30px] md:text-[60px] tracking-tight font-bold mt-10'>Welcome back {userData.name}</h1>
                {userData.type === "dayScholar" ? (
                    <h2 className='text-[20px] md:text-[30px] text-gray-400 font-bold tracking-tight'>Day Scholar</h2>
                ) : (
                    <h2 className='text-[20px] md:text-[30px] text-gray-400 font-bold tracking-tight'>Hosteller</h2>
                )}
                <button className='bg-[#304b6b] border-[1px] rounded-[1px] border-black text-white mt-5 px-5 py-2 md:px-10 font-bold transition ease-in-out delay-150'>See Profile</button>
            </div>
            <div className='min-h-full m-5 md:m-20'>
                <h1 className='font-bold text-3xl md:text-5xl my-5'>{userData.type === "dayScholar" ? "Active" : "Your"} Orders</h1>
                {userData.type === "dayScholar" ? (
                    <div className="flex flex-wrap gap-5">
                        {allrequests.slice().reverse().map((request) => {
                            return (
                                <div key={request._id} className="flex flex-wrap gap-5">
                                    <div className="min-w-[200px] md:min-w-[300px] min-h-[200px] p-6 bg-[#f2faff] border border-gray-100 rounded-lg shadow">
                                        <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{request.title}</h5>
                                        <p className="mb-1 text-sm text-gray-600 dark:text-gray-400">Requested by: {request.user.name}</p>
                                        <p className="mb-3 font-normal text-gray-600 dark:text-gray-400">{request.description}</p>
                                        <h1 className='my-5 font-bold text-xl md:text-2xl'>₹ {request.price} </h1>
                                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-[1] hover:bg-[#304b6a] focus:ring-4 focus:outline-none focus:ring-blue-300">
                                            Accept
                                        </a>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                ) : (
                    <>
                        <div className='text-3xl fixed flex text-white w-16 bottom-0 m-10 right-0 h-16 justify-center items-center rounded-full'>
                            <DialogDemo />
                        </div>
                        <div className="flex flex-wrap gap-5">
                            {
                                requests.slice().reverse().map((request) => {
                                    return (
                                        <div key={request._id} className="flex flex-wrap gap-5">
                                            <div className="min-w-[200px] md:min-w-[300px] min-h-[200px] p-6 bg-[#f2faff] border border-gray-100 rounded-lg shadow">
                                                <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{request.title}</h5>
                                                <p className="mb-3 font-normal text-gray-600 dark:text-gray-400">{request.description}</p>
                                                <h1 className='my-5 font-bold text-xl md:text-2xl'>₹ {request.price} </h1>
                                                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-500 rounded-[1] hover:bg-[#304b6a] focus:ring-4 focus:outline-none focus:ring-blue-300">
                                                    Pending
                                                </a>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </>

                )}
            </div>
        </div>
    );
};
export default Dashboard;
