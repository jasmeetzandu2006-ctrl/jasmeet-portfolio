export default function FrenchProgress() {
  const journey = [
    {
      level: "A1",
      title: "Foundation Complete",
      status: "completed",
    },
    {
      level: "A2",
      title: "Everyday Communication",
      status: "completed",
    },
    {
      level: "B1",
      title: "Preparing for DELF B1",
      status: "current",
    },
  ];

  return (
    <section className="relative py-24 bg-[#0f172a] text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,#facc15_1px,transparent_1px)] bg-[length:40px_40px]" />

      <div className="relative max-w-5xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center">
          🇫🇷 My French Adventure
        </h2>

        <p className="text-center text-gray-300 mt-3 mb-20">
          Every new level is another step toward fluency.
        </p>

        {/* Journey Line */}
        <div className="relative">

          {/* Dotted Path */}
          <div className="absolute top-8 left-0 w-full border-t-4 border-dashed border-yellow-400"></div>

          <div className="grid grid-cols-3 gap-6 relative">

            {journey.map((item) => (
              <div key={item.level} className="text-center">

                {/* Icon */}
                <div
                  className={`mx-auto w-20 h-20 rounded-full flex items-center justify-center text-3xl shadow-xl
                    ${
                      item.status === "completed"
                        ? "bg-green-500"
                        : "bg-yellow-400 text-black animate-pulse"
                    }`}
                >
                  {item.status === "completed" ? "✅" : "⭐"}
                </div>

                {/* Level */}
                <h3 className="text-3xl font-bold mt-6">
                  {item.level}
                </h3>

                {/* Title */}
                <p className="text-gray-300 mt-2">
                  {item.title}
                </p>

              </div>
            ))}
          </div>
        </div>

        {/* Treasure */}
        <div className="text-center mt-20">

          <div className="text-7xl animate-bounce">
            🏆
          </div>

          <h3 className="text-3xl font-bold mt-4 text-yellow-400">
            Treasure: French Fluency
          </h3>

          <p className="text-gray-400 mt-3">
            Destination after completing DELF B1.
          </p>

        </div>
      </div>
    </section>
  );
}