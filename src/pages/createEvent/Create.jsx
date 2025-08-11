import { useState, useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";

import { AuthContext } from "../../providers/AuthContext";
import useEventApi from "../../api/useEventApi";

const Create = () => {
  const { user } = useContext(AuthContext);
  const [eventDate, setEventDate] = useState(null);
  const [loading, setLoading] = useState(false);
  const { createEvent } = useEventApi();

  const handleCreateEvent = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const formData = new FormData(form);
    const newEvent = Object.fromEntries(formData);

    newEvent.date = eventDate;
    newEvent.creatorEmail = user?.email;

    try {
      await createEvent(newEvent);
      Swal.fire({
        title: "Event Created!",
        text: "Your event has been successfully created.",
        icon: "success",
        confirmButtonText: "OK",
      });
      form.reset();
      setEventDate(null);
    } catch (error) {
      console.error("Error creating event:", error);
      Swal.fire({
        title: "Error",
        text: "Something went wrong while creating the event.",
        icon: "error",
        confirmButtonText: "Try Again",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl p-6 mx-auto">
      <h2 className="mb-4 text-4xl font-bold text-center text-primary">
        Create Your Event
      </h2>
      <p className="mb-6 text-center text-gray-500">
        Fill in the form below to create your event. All fields are required.
      </p>

      <form
        onSubmit={handleCreateEvent}
        className="p-8 space-y-6 bg-white shadow-lg rounded-2xl"
      >
        {/* Email */}
        <div>
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Your Email
          </label>
          <input
            type="email"
            value={user?.email || ""}
            disabled
            className="w-full bg-gray-100 input input-bordered"
          />
        </div>

        {/* Title */}
        <div>
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Event Title
          </label>
          <input
            type="text"
            name="title"
            placeholder="Enter Event Title"
            className="w-full input input-bordered"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            rows="3"
            placeholder="Enter Event Description"
            className="w-full textarea textarea-bordered"
            required
          ></textarea>
        </div>

        {/* Date & Type */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Event Date
            </label>
            <DatePicker
              selected={eventDate}
              onChange={(date) => setEventDate(date)}
              className="w-full input input-bordered"
              placeholderText="Select a future date"
              minDate={new Date()}
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Event Type
            </label>
            <select
              name="eventType"
              className="w-full select select-bordered"
              required
              defaultValue=""
            >
              <option value="" disabled>
                Select Event Type
              </option>
              <option value="cleanup">Cleanup</option>
              <option value="plantation">Plantation</option>
              <option value="donation">Donation</option>
              <option value="fundraising">Fundraising</option>
              <option value="blood-drive">Blood Drive</option>
              <option value="community-workshop">Community Workshop</option>
            </select>
          </div>
        </div>

        {/* Thumbnail */}
        <div>
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Thumbnail Image URL
          </label>
          <input
            type="url"
            name="thumbnail"
            placeholder="Enter Thumbnail Image URL"
            className="w-full input input-bordered"
            required
          />
        </div>

        {/* Location */}
        <div>
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Location
          </label>
          <input
            type="text"
            name="location"
            placeholder="Enter Event Location"
            className="w-full input input-bordered"
            required
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full px-6 py-3 font-semibold text-white transition-transform duration-300 rounded-lg shadow-md
            bg-primary hover:bg-accent  hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed hover:text-primary`}
        >
          {loading ? (
            <svg
              className="w-6 h-6 mx-auto text-primary animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
          ) : (
            "Create Event"
          )}
        </button>
      </form>
    </div>
  );
};

export default Create;
