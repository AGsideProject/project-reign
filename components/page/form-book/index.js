import axios from "axios";
import { MailCheck } from "lucide-react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const initform = {
  brand_name: "",
  contact_name: "",
  shoot_date: "",
  booking_hour: "",
  usages: [],
  wa_number: "",
  email: "",
  desired_model: "",
};

const FormBookModal = ({ isOpen, onClose }) => {
  // Initialize State
  const [formData, setFormData] = useState(initform);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isSend, setIsSend] = useState(false);
  const usageOptions = [
    "Social media & web",
    "OOH",
    "Billboard",
    "Prints",
    "Personal portfolio (non-commercial)",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (option) => {
    setFormData((prev) => ({
      ...prev,
      usages: prev.usages.includes(option)
        ? prev.usages.filter((item) => item !== option)
        : [...prev.usages, option],
    }));
  };

  const handleClose = () => {
    setError("");
    setLoading(false);
    setFormData(initform);
    onClose();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    // Validation

    setLoading(true);
    try {
      const payload = { ...formData, usages: formData.usages.join(",") };

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/booking`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            "request-id": uuidv4(),
          },
        }
      );

      if (response.status == 201) {
        setIsSend(true);
      }
    } catch (error) {
      setLoading(false);
      setError(error?.response?.data?.message || "Failed to send request");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="flex relative w-[95%] max-w-4xl max-h-[80vh] pt-6 bg-white shadow-lg pb-6">
        <button
          onClick={handleClose}
          className="absolute flex justify-center items-center rounded-full top-[-16px] right-[-9px] text-gray-300 hover:text-white text-2xl h-7 w-7 bg-black pb-1"
        >
          &times;
        </button>
        <div className="px-6 max-h-[80vh] overflow-y-auto w-full scrollbar-hidden">
          <h2 className="text-3xl font-light mb-6 text-gray-800">
            Booking Form
          </h2>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div>
              <label className="block text-sm font-semibold mb-1">
                What’s the brand name?
              </label>
              <input
                type="text"
                name="brand_name"
                value={formData.brand_name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 focus:outline-none focus:border-black transition-colors duration-300"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Contact Name
              </label>
              <input
                type="text"
                name="contact_name"
                value={formData.contact_name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 focus:outline-none focus:border-black transition-colors duration-300"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Shoot Date
              </label>
              <input
                type="date"
                name="shoot_date"
                value={formData.shoot_date}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 focus:outline-none focus:border-black transition-colors duration-300"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Booking Hours
              </label>
              <input
                type="text"
                placeholder="1 hour"
                name="booking_hour"
                value={formData.booking_hour}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 focus:outline-none focus:border-black transition-colors duration-300"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                WhatsApp Number
              </label>
              <input
                type="tel"
                name="wa_number"
                value={formData.wa_number}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 focus:outline-none focus:border-black transition-colors duration-300"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 focus:outline-none focus:border-black transition-colors duration-300"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Which model / how many models?
              </label>
              <input
                type="text"
                name="desired_model"
                value={formData.desired_model}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 focus:outline-none focus:border-black transition-colors duration-300"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                What are the usages?
              </label>
              <textarea
                value={formData.usages.join(", ")}
                readOnly
                placeholder="Select usages below"
                className="w-full p-2 border bg-gray-100"
              />
              <div className="flex flex-wrap gap-2 mt-2">
                {usageOptions.map((option) => (
                  <label key={option} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={formData.usages.includes(option)}
                      onChange={() => handleCheckboxChange(option)}
                      className="form-checkbox text-[#FF8C00]"
                    />
                    <span className="text-sm">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="col-span-1 md:col-span-2 text-center">
              {error && (
                <p className="text-center pb-2 text-red-600 text-sm">{error}</p>
              )}
              <button
                type="submit"
                disabled={isSend || loading}
                className="w-full bg-black text-white py-3 hover:bg-gray-800 transition-colors flex justify-center items-center gap-2"
              >
                {isSend ? (
                  <>
                    Message seccesfully sent...
                    <MailCheck />
                  </>
                ) : loading ? (
                  <p className="loader" />
                ) : (
                  "Send a message"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormBookModal;
