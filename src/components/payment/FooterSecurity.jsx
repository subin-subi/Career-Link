const items = [
  "Secure Payment",
  "Cancel Anytime",
  "7-Day Guarantee",
  "24/7 Support",
];

export default function FooterSecurity() {
  return (
    <div className="grid grid-cols-4 gap-4 mt-10 border-t pt-6 text-center">
      {items.map((item) => (
        <div key={item}>
          <p className="font-medium">{item}</p>
        </div>
      ))}
    </div>
  );
}