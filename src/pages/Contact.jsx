import { useState, useRef, Suspense } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import Fox from "../models/Fox";
import Loader from "../components/Loader";
import useAlert from "../hooks/useAlert";
import { a } from "@react-spring/three";
import Alert from "../components/Alert";

const Contact = () => {
  // form ka ref bna rhe hain
  const formRef = useRef(null);

  // Setting State for form input values
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // isLoading state hm add kreinge joke hm use kreinge to disable tha button
  const [isLoading, setIsLoading] = useState(false);

  // importing Custom Hook for Alert
  const { alert, showAlert, hideAlert } = useAlert();

  // Animation state bnarhe hain joke hm send kreinge as a props Fox mein
  // Fox ki differnet animation states hain ismein hm use kreinge different states of animation
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  // Handle Change function mein hm jo input values change hngi unko set kreinge
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle Submit mein hm jb form ko submit kreinge to jb email jaegi kahin pe to hm usko use krienge
  // Emailjs ka package use kreinge hm ismein apne pass
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Jb submit hojae form to hm bhaga rhe hain fox ko to uski animation ka naam hit hai
    setCurrentAnimation("hit");

    // Emailjs ko use krke hm apna msg bhejdeinge apni email pe
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Wajahat Abbas",
          from_email: form.email,
          to_email: "wajahatabbas27@gmail.com",
          message: `${form.message} and send by ${form.email}`,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);

        // Jb msg chala jaega to hm Success msg show krdeinge
        // TODO: SHOW SUCCESS MESSAGE
        showAlert({
          show: true,
          text: "Message Sent Succesfully!",
          type: "Success",
        });

        // Timeout pe fox ki animation ko hm stop krrhe hain apne pass
        setTimeout(() => {
          // Timeout pe animation bhi hatjae aur alert bhi hatjae hmare pass se
          // TODO: HIDE AN ALERT
          // Is function mein hmein false dena zrori hai
          hideAlert(false);
          // timeout hai 3000ms aur ispe current Animation ko idle krdo
          setCurrentAnimation("idle");
          // clear krleinge hm form ko to the default values state ko
          setForm({ name: "", email: "", message: "" });
        }, [3000]);
      })
      .catch((error) => {
        setIsLoading(false);
        setCurrentAnimation("idle");
        console.log(error);
        // TODO: SHOW ERROR MESSAGE
        // Is mein bhi show hogi alert with engative response
        showAlert({
          show: true,
          text: "I didn't receive your message!",
          type: "danger",
        });
      });
  };

  // fox move kregi jb hm move input field mein kuch likheinge apne pass
  // hmein track krna prega ke kia kuch likha hai aur kia kuch mitgya hai
  // yh hm kreinge focus aur blur ke builtin functions se jo javascript deti hai hmein isse hm track krleinge
  // onFocus & onBlur ke functions ko hm use kreinge apne pass take track krein aur us hisab se hm state manage krke animation ko move krdeinge.

  // jb hm focus krrhe hain to hm apni currentAnimation ko -- walk krrhe hain
  const handleFocus = () => setCurrentAnimation("walk");

  // Aur jb hm focus htarhe hain to hm apni currentAnimation ko -- idle krrhe hain
  const handleBlur = () => setCurrentAnimation("idle");

  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      {/* Agr Alert.show true hai to Alert show krde */}
      {alert.show && <Alert {...alert} />}

      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get In touch</h1>
        <form
          className='w-full flex flex-col gap-7 mt-14'
          onSubmit={handleSubmit}
        >
          <label className='text-black-500 font-semibold'>
            Name
            <input
              type='text'
              name='name'
              className='input'
              placeholder='John'
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Email
            <input
              type='email'
              name='email'
              className='input'
              placeholder='John@gmail.com'
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Your Message
            <textarea
              name='message'
              rows={4}
              className='textarea'
              placeholder='Let me know how I can help you!'
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type='submit'
            disabled={isLoading}
            className='btn'
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {/* Agr loading ki state true hai to hmare pass show krega yh disabeled */}
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
      {/* 3D Fox ke liye hm yh bnarhe hain */}
      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        {/* Canvas ke andar fox ki jsx show krdeinge hm aur yh chalti hai camera ke andar */}
        {/* Canvas mein Camera ke andar hm props bhjrhe hain bht sare */}
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader />}>
            {/* props send krrhe hain Fox ke andar yhn pe jo ke hm component mein jake destructure krleinge apne pass */}
            {/* Yh jo Current Animation pass krrhe hain yh hmare pass different animations hai Fox ki joke hm apply krrhe hain */}
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.6, 0]} // apni screen ke hisab se adjust krleinge hm yh sb coordinates
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
