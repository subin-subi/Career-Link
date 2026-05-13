import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";

export default function PaymentMethod() {
  const { theme } = useTheme();

  const [formData, setFormData] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
    cardName: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    // Card Number Validation
    if (!/^\d{10}$/.test(formData.cardNumber.replace(/\s/g, ""))) {
      newErrors.cardNumber = "Card number must be 10 digits";
    }

    // Expiry Validation (MM/YY)
    if (
      formData.expiry &&
      !/^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(formData.expiry)
    ) {
      newErrors.expiry = "Enter valid expiry date";
    }

    // CVV Validation
    if (!/^\d{3,4}$/.test(formData.cvv)) {
      newErrors.cvv = "CVV must be 3 or 4 digits";
    }

    // Name Validation
    if (!/^[A-Za-z ]+$/.test(formData.cardName.trim())) {
      newErrors.cardName = "Enter valid cardholder name";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const inputStyle = `
    w-full rounded-lg p-3 outline-none transition
    ${theme.cardBg}
    ${theme.textPrimary}
    ${theme.border}
    focus:ring-2 focus:ring-purple-500
  `;

  const handleSubmit = () => {
    if (validate()) {
      alert("Payment details valid ✅");
    }
  };

  return (
    <div
      className={`
        rounded-xl p-5 space-y-4
        ${theme.cardBg}
        ${theme.border}
      `}
    >
      <h3
        className={`font-semibold ${theme.textPrimary}`}
      >
        Credit / Debit Card
      </h3>

      {/* Card Number */}
      <div>
        <input
          type="text"
          name="cardNumber"
          placeholder="Card Number"
          value={formData.cardNumber}
          onChange={handleChange}
          className={inputStyle}
        />

        {errors.cardNumber && (
          <p className="text-red-500 text-sm mt-1">
            {errors.cardNumber}
          </p>
        )}
      </div>

      {/* Expiry + CVV */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            name="expiry"
            placeholder="MM/YY"
            value={formData.expiry}
            onChange={handleChange}
            onBlur={validate}
            className={inputStyle}
          />

          {errors.expiry && (
            <p className="text-red-500 text-sm mt-1">
              {errors.expiry}
            </p>
          )}
        </div>

        <div>
          <input
            type="text"
            name="cvv"
            placeholder="CVV"
            value={formData.cvv}
            onChange={handleChange}
            className={inputStyle}
          />

          {errors.cvv && (
            <p className="text-red-500 text-sm mt-1">
              {errors.cvv}
            </p>
          )}
        </div>
      </div>

      {/* Cardholder Name */}
      <div>
        <input
          type="text"
          name="cardName"
          placeholder="Cardholder Name"
          value={formData.cardName}
          onChange={handleChange}
          className={inputStyle}
        />

        {errors.cardName && (
          <p className="text-red-500 text-sm mt-1">
            {errors.cardName}
          </p>
        )}
      </div>

      {/* Validate Button */}
      <button
        onClick={handleSubmit}
        className="
          w-full bg-purple-600 text-white
          py-3 rounded-lg font-medium
          hover:bg-purple-700 transition
        "
      >
        Validate Payment
      </button>
    </div>
  );
}