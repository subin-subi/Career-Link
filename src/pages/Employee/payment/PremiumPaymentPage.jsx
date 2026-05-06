import BenefitCard from "../../../components/payment/BenefitCard";
import PlanCard from "../../../components/payment/PlanCard";
import PaymentMethod from "../../../components/payment/PaymentMethod";
import FooterSecurity from "../../../components/payment/FooterSecurity";
import BottomNav from "../../JobSearch/BottomNav";
import { benefits, plans } from "../../../data/paymentData";
import Navbar from "../../../components/Navbar/Navbar";

function PremiumPaymentPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <div className="pt-24 pb-24 px-4">
        {/* pt-20 gives space below navbar */}
        
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-3">
          
          {/* Left Side */}
          <div className="border-r">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-5 text-white">
              <h1 className="text-2xl font-bold">Go Premium ✨</h1>
              <p className="mt-2 text-sm opacity-90">
                Unlock premium features
              </p>
            </div>

            <div className="p-5 space-y-5">
              {benefits.map((benefit) => (
                <BenefitCard
                  key={benefit.title}
                  {...benefit}
                />
              ))}
            </div>

            <div className="p-5 bg-gray-100 m-4 rounded-xl">
              <h3 className="text-lg font-semibold">Premium Monthly</h3>
              <p className="text-2xl font-bold text-purple-600 mt-2">
                $9.99
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Cancel anytime
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="lg:col-span-2 p-6 space-y-5">
            <div>
              <h2 className="text-2xl font-bold">Payment Details</h2>
              <p className="text-sm text-gray-500">
                Complete payment to activate premium
              </p>
            </div>

            {/* Plans */}
            <div className="space-y-3">
              <h3 className="font-semibold">Select Plan</h3>
              {plans.map((plan, index) => (
                <PlanCard
                  key={plan.name}
                  plan={plan}
                  active={index === 0}
                />
              ))}
            </div>

            {/* Payment Method */}
            <div>
              <h3 className="font-semibold mb-3">
                Payment Method
              </h3>
              <PaymentMethod />
            </div>

            {/* Pay Button */}
            {/* <button className="w-full bg-purple-600 text-white py-3 rounded-xl font-medium hover:bg-purple-700 transition">
              Pay $9.99
            </button> */}

            {/* Footer */}
            <FooterSecurity />
          </div>
        </div>
      </div>
      <BottomNav /> 
    </div>
  );
}

export default PremiumPaymentPage;