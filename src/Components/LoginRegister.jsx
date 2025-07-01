import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, Mail, Lock, User, Image } from "lucide-react";
import axios from "axios";
import { MainContent } from "../Context/ContextApi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


export default function LoginRegister() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const { user, setUser } = useContext(MainContent);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const API = "https://event-management-server-side-sigma.vercel.app";
  const onSubmit = async (data) => {
    const endpoint = isLogin ? `${API}/login` : `${API}/register`;
    const response = await axios.post(endpoint, data);
    reset(); // Reset form after submit
    if (response.data.message !== "Invalid credentials") {
      localStorage.setItem("user", JSON.stringify(response.data.user));
      setUser(response.data.user);
      toast.success(response.data.message);
      navigate("/");
    } else {
      toast.error(response.data.message);
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    reset(); // Clear fields when toggling
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-background px-4 font-heading">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6 text-text">
          {isLogin ? "Login" : "Register"}
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {!isLogin && (
            <>
              <div>
                <label className="block mb-1 font-medium">Name</label>
                <div className="flex items-center border rounded px-3 py-2">
                  <User className="w-8 h-8 mr-2 text-accent " />
                  <input
                    {...register("name", { required: "Name is required" })}
                    placeholder="Your name"
                    className="w-full outline-none"
                  />
                </div>
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>
              <div>
                <label className="block mb-1 font-medium">Photo Url</label>
                <div className="flex items-center border rounded px-3 py-2">
                  <Image className="w-8 h-8 mr-2 text-accent " />
                  <input
                    {...register("photoUrl", {
                      required: "photoUrl is required",
                    })}
                    placeholder="Photo Url"
                    className="w-full outline-none"
                  />
                </div>
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>
            </>
          )}

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <div className="flex items-center border rounded px-3 py-2">
              <Mail className="w-8 h-8 mr-2 text-accent" />
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Enter a valid email",
                  },
                })}
                placeholder="Email address"
                className="w-full outline-none"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 font-medium">Password</label>
            <div className="flex items-center border rounded px-3 py-2">
              <Lock className="w-8 h-8 mr-2 text-accent" />
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Min 6 characters" },
                  pattern: {
                    value: /^(?=.*[A-Z])(?=.*\d).+$/,
                    message: "Must contain 1 uppercase & 1 number",
                  },
                })}
                placeholder="Password"
                className="w-full outline-none"
              />
              <button
                type="button"
                className="ml-2 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:bg-violet-950 text-white py-2 rounded-md font-semibold"
          >
            {isLogin ? "Login" : "Register"}
          </button>

          <p className="text-center mt-4 text-sm">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              type="button"
              onClick={toggleForm}
              className="text-accent font-medium"
            >
              {isLogin ? "Register" : "Login"}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}
