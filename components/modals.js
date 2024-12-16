import { useState } from "react";

const Modal = ({ isOpen, onClose }) => {
  // Initialize State
  const [formData, setFormData] = useState({
    brandName: "",
    shootDate: "",
    bookingHours: "",
    usage: [],
    contactName: "",
    email: "",
    phoneNumber: "",
    whatsappNumber: "",
    location: "",
    models: "",
  });

  const [loading, setLoading] = useState(false);

  const usageOptions = [
    "Social media & web",
    "OOH",
    "Billboard",
    "Prints",
    "Personal portfolio (non-commercial)",
  ];

  const handleCheckboxChange = (option) => {
    setFormData((prev) => ({
      ...prev,
      usage: prev.usage.includes(option)
        ? prev.usage.filter((item) => item !== option)
        : [...prev.usage, option],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setLoading(true);
    setTimeout(() => {
      onClose();
      setLoading(false);
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative w-[95%] max-w-4xl max-h-[80vh] bg-black">
        <button
          onClick={onClose}
          className="absolute flex justify-center items-center rounded-full top-[-16px] right-[-9px] text-gray-300 hover:text-white text-2xl h-7 w-7 bg-black pb-1"
        >
          &times;
        </button>
        <div className="bg-white shadow-lg p-6 max-h-[80vh] overflow-y-auto w-full">
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
                value={formData.brandName}
                onChange={(e) =>
                  setFormData({ ...formData, brandName: e.target.value })
                }
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
                value={formData.location}
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
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
                value={formData.shootDate}
                onChange={(e) =>
                  setFormData({ ...formData, shootDate: e.target.value })
                }
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
                value={formData.bookingHours}
                onChange={(e) =>
                  setFormData({ ...formData, bookingHours: e.target.value })
                }
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
                value={formData.whatsappNumber}
                onChange={(e) =>
                  setFormData({ ...formData, whatsappNumber: e.target.value })
                }
                className="w-full p-2 border border-gray-300 focus:outline-none focus:border-black transition-colors duration-300"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Email Address
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
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
                value={formData.models}
                onChange={(e) =>
                  setFormData({ ...formData, models: e.target.value })
                }
                className="w-full p-2 border border-gray-300 focus:outline-none focus:border-black transition-colors duration-300"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                What are the usages?
              </label>
              <textarea
                value={formData.usage.join(", ")}
                readOnly
                placeholder="Select usages below"
                className="w-full p-2 border bg-gray-100"
              />
              <div className="flex flex-wrap gap-2 mt-2">
                {usageOptions.map((option) => (
                  <label key={option} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={formData.usage.includes(option)}
                      onChange={() => handleCheckboxChange(option)}
                      className="form-checkbox text-[#FF8C00]"
                    />
                    <span className="text-sm">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="col-span-1 md:col-span-2 text-center">
              <button
                type="submit"
                className="w-full bg-black text-white py-3 hover:bg-gray-800 transition-colors flex justify-center items-center"
              >
                {loading ? <p className="loader" /> : "Send a message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
