import { PriceCard } from "./ui/price-card";

export function Pricing() {
  const packages = [
    {
      title: "Starter",
      price: 5,
      features: [
        "Delay Fix",
        "CPU Optimize",
        "Lowest RAM Usage",
        "Improve FPS",
        "2 Tools"
      ]
    },
    {
      title: "Ultimate",
      price: 15,
      features: [
        "Custom OS",
        "Maximum Optimize",
        "Process 50",
        "6 Tools",
        "BIOS Optimization",
        "Overclocking",
        "Mouse and Keyboard Delay Fix",
        "Lowest Latency & RAM Usage"
      ],
      isPopular: true
    },
    {
      title: "Professional",
      price: 10,
      features: [
        "Process 60",
        "Input Delay Fix",
        "4 Tools",
        "Performance Increase",
        "Low Latency",
        "CPU Optimize",
        "Power Plan"
      ]
    }
  ];

  return (
    <div id="pricing" className="py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-32">
          <h2 className="text-3xl font-bold sm:text-4xl mb-4">Choose Your Package</h2>
          <p className="text-muted-foreground">
            Select the perfect optimization package that suits your needs and budget
          </p>
        </div>
        <div className="mx-auto grid max-w-lg grid-cols-1 items-start gap-10 lg:max-w-none lg:grid-cols-3">
          {packages.map((pkg, index) => (
            <div
              key={pkg.title}
              className={`${
                index === 1
                  ? "lg:-mt-8 lg:scale-110"
                  : ""
              }`}
            >
              <PriceCard {...pkg} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}