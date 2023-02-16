import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { SubmitHandler, useForm } from "react-hook-form";
import { PageInfo } from '../typing';

type Props = {
  pageInfo: PageInfo;
};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactMe = ({pageInfo}: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:nhat117@gmail.com?subject=${formData.subject}&body=Hi Nhat, my name is ${formData.name}. ${formData.message}`;
  };

  return (
    <div className='relative flex flex-col items-center h-screen px-10 mx-auto text-center md:text-left md:flex-row max-w-7xl justify-evenly'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact</h3>
      <div className='flex flex-col space-y-10'>
        <h4 className='text-4xl font-semibold text-center'>
          Want to hit me up ?{" "}
          <span className='decoration-[#F7AB0A]/50 underline'>{"Let's talk !"}</span>
        </h4>

        <div className='flex flex-col items-start space-y-10'>
          <div className='flex items-center justify-center space-x-5'>
            <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
            <p className='text-2xl'>{pageInfo?.phoneNumber}</p>
          </div>

          <div className='flex items-center justify-center space-x-5'>
            <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
            <p className='text-2xl'>{pageInfo?.email}</p>
          </div>

          <div className='flex items-center justify-center space-x-5'>
            <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
            <p className='text-2xl'>{pageInfo?.address}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col mx-auto space-y-2 w-fit'>
          <div className='flex space-x-2'>
            <input {...register("name")} placeholder='Name' className='contactInput' type='text' />
            <input
              {...register("email")}
              placeholder='Email'
              className='contactInput'
              type='email'
            />
          </div>
          <input
            {...register("subject")}
            placeholder='Subject'
            className='contactInput'
            type='text'
          />
          <textarea
            {...register("message")}
            placeholder='Message'
            className='contactInput'
          />
          <button
            type='submit'
            className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg hover:bg-[#F7AB0A]/80 transition duration-300 ease-in-out'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
