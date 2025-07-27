import { RxAvatar } from "react-icons/rx"

const Page = () => {
    const res = { "itinerary": [["10:00 AM - 11:30 AM", "Travel from NIFT College, HSR Layout to Bannerghatta Biological Park (approximately 1.5 hours travel time considering Saturday morning traffic).", "2400 (approximately for 2 cabs/auto)"], ["11:30 AM - 3:00 PM", "Explore Bannerghatta Biological Park (Zoo, Safari, Butterfly Park).", "3200 (tickets for 8 people)"], ["3:00 PM - 4:00 PM", "Lunch at 'The Green Lantern' near Bannerghatta Biological Park.", "2000 (approximately)"], ["4:00 PM - 5:30 PM", "Visit Sri Kalyani Kshethra (a beautiful temple nearby).", "0 (entry is free)"], ["5:30 PM - 6:30 PM", "Relax and enjoy the nature around the temple premises.", "0"], ["6:30 PM - 8:00 PM", "Travel back to HSR Layout (approximately 1.5 hours travel time).", "2400 (approximately for 2 cabs/auto)"], ["Total Estimated Spending", "", "10000"]] }

    return (
        <div>
            <nav className="flex items-center justify-between p-4 bg-orange-600 text-white h-16">
                <div className="flex items-center gap-2 cursor-pointer w-fit">
                    {/* <div className="relative w-[250px]">
                        <input
                            type="text"
                            value={address}
                            onChange={handleInputChange}
                            placeholder="Search Location ..."
                            className="location-search-input pl-8 pr-2 py-2 rounded w-full"
                            autoComplete="off"
                        />
                        <FaLocationArrow className="absolute left-2 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                        {suggestions.length > 0 && (
                            <div className="absolute z-10 bg-white border border-gray-300 rounded w-full mt-1 shadow-lg autocomplete-dropdown-container">
                                {loading && <div className="p-2 text-gray-500">Loading...</div>}
                                {suggestions.map((suggestion) => (
                                    <div
                                        key={suggestion.place_id}
                                        className="p-2 cursor-pointer text-gray-500 hover:bg-orange-100"
                                        onClick={() => handleSuggestionSelect(suggestion)}
                                    >
                                        <span>{suggestion.display_name}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div> */}
                </div>
                {/* <span className="text-lg font-semibold w-fit flex items-center justify-center">Planner</span>
                <RxAvatar className="text-2xl cursor-pointer w-fit" /> */}
            </nav>

            <div className="flex flex-col items-center justify-center mt-10">
                <h1 className="text-2xl font-bold mb-4">Itinerary Summary</h1>
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Time</th>
                            <th className="border px-4 py-2">Activity</th>
                            <th className="border px-4 py-2">Estimated Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        {res.itinerary.map((item, index) => (
                            <tr key={index}>
                                <td className="border px-4 py-2">{item[0]}</td>
                                <td className="border px-4 py-2">{item[1]}</td>
                                <td className="border px-4 py-2">{item[2]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="mt-4">
                    <h2 className="text-xl font-semibold">Total Estimated Spending: ₹{res.itinerary[res.itinerary.length - 1][2]}</h2>


                </div>
            </div>
        </div>
    );
}
export default Page