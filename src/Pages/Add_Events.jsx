import React, { createContext, useContext } from "react";
import { useForm } from "react-hook-form";
import {
  CalendarDays,
  MapPin,
  FileText,
  User,
  Mail,
  PlusCircle,
  CloudHail,
} from "lucide-react";
import axios from "axios";
import { MainContent } from "../Context/ContextApi";
const API = "https://event-management-server-side-sigma.vercel.app";
const Add_Events = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const finalData = {
      ...data,
      attendeeCount: 0, // default
    };
    // console.log(finalData);
    const url = `${API}/addEvent`;
    const response = await axios.post(url, finalData);
    console.log(response.data);
    reset();
  };
  return (
    <div className="max-w-xl mx-auto my-10 bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Add New Event</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Event Title */}
        <div>
          <label className="block mb-1 font-medium">Event Title</label>
          <div className="flex items-center border rounded px-3 py-2">
            <PlusCircle className="w-5 h-5 text-accent mr-2" />
            <input
              {...register("title", { required: "Event title is required" })}
              placeholder="Enter event title"
              className="w-full outline-none"
            />
          </div>
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>

        {/* User Name */}
        <div>
          <label className="block mb-1 font-medium">Your Name</label>
          <div className="flex items-center border rounded px-3 py-2">
            <User className="w-5 h-5 text-accent mr-2" />
            <input
              {...register("name", { required: "Name is required" })}
              placeholder="Enter user name"
              className="w-full outline-none"
            />
          </div>
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <div className="flex items-center border rounded px-3 py-2">
            <Mail className="w-5 h-5 text-accent mr-2" />
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Enter a valid email",
                },
              })}
              placeholder="enter you loging email"
              className="w-full outline-none text-black"
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Date & Time */}
        <div>
          <label className="block mb-1 font-medium">Date & Time</label>
          <div className="flex items-center border rounded px-3 py-2">
            <CalendarDays className="w-5 h-5 text-accent mr-2" />
            <input
              type="datetime-local"
              {...register("datetime", {
                required: "Date and time are required",
              })}
              className="w-full outline-none"
            />
          </div>
          {errors.datetime && (
            <p className="text-red-500 text-sm">{errors.datetime.message}</p>
          )}
        </div>

        {/* Location */}
        <div>
          <label className="block mb-1 font-medium">Location</label>
          <div className="flex items-center border rounded px-3 py-2">
            <MapPin className="w-5 h-5 text-accent mr-2" />
            <input
              {...register("location", { required: "Location is required" })}
              placeholder="Enter location"
              className="w-full outline-none"
            />
          </div>
          {errors.location && (
            <p className="text-red-500 text-sm">{errors.location.message}</p>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 font-medium">Description</label>
          <div className="flex items-start border rounded px-3 py-2">
            <FileText className="w-5 h-5 text-accent mr-2 mt-1" />
            <textarea
              {...register("description", {
                required: "Description is required",
              })}
              placeholder="Event description..."
              className="w-full outline-none resize-none"
              rows={3}
            />
          </div>
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-primary hover:bg-violet-950 text-white py-2 rounded-md font-semibold"
        >
          Add Event
        </button>
      </form>
    </div>
  );
};

export default Add_Events;
