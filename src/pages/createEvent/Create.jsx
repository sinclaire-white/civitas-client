import { useState, useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";

import { AuthContext } from "../../providers/AuthContext";

const Create = () => {
  const { user } = useContext(AuthContext);
  const [eventDate, setEventDate] = useState(null);

  const handleCreateEvent = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newEvent = Object.fromEntries(formData);

    newEvent.date = eventDate;
    newEvent.creatorEmail = user?.email;

    Swal.fire({
    title: "Event Created!",
    text: "Your event has been successfully created.",
    icon: "success",
    confirmButtonText: "OK",
  });

  form.reset();
  setEventDate(null);
  };

  return (
    <div className="max-w-4xl p-4 mx-auto">
      <h2 className="mb-4 text-4xl font-bold text-center text-primary">
        Create Your Event Here
      </h2>
      <p className="mb-4 text-center opacity-70 text-primary">
        Fill up this form to create your event. Please complete all fields, no
        field can be left unfilled.
      </p>
      <form
        onSubmit={handleCreateEvent}
        className="p-6 space-y-4 bg-primary rounded-xl"
      >
        {/* User Email */}
        <fieldset className="p-3 border fieldset bg-secondary border-base-100 rounded-box">
          <label className="text-sm font-bold text-black label">
            Your Email
          </label>
          <input
            type="email"
            value={user?.email || ""}
            disabled
            className="w-full input input-bordered"
          />
        </fieldset>
        {/* Title */}
        <fieldset className="p-3 border fieldset bg-secondary border-base-100 rounded-box">
          <label className="text-sm font-bold text-black label">
            Event Title
          </label>
          <input
            type="text"
            name="title"
            placeholder="Enter Event Title"
            className="w-full input input-bordered"
            required
          />
        </fieldset>

        {/* Description */}
        <fieldset className="p-3 border fieldset bg-secondary border-base-100 rounded-box">
          <label className="text-sm font-bold text-black label">
            Description
          </label>
          <textarea
            name="description"
            className="w-full textarea textarea-bordered"
            rows="3"
            placeholder="Enter Event Description"
            required
          ></textarea>
        </fieldset>

        {/* Event Date and Type (Side by Side) */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Event Date */}
          <fieldset className="p-3 border fieldset bg-secondary border-base-100 rounded-box">
            <label className="text-sm font-bold text-black label">
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
          </fieldset>

          {/* Event Type */}
          <fieldset className="p-3 border fieldset bg-secondary border-base-100 rounded-box">
            <label className="text-sm font-bold text-black label">
              Event Type
            </label>
            <select
              name="eventType"
              className="w-full select select-bordered"
              required
            >
              <option value="" disabled selected>
                Select Event Type
              </option>
              <option value="cleanup">Cleanup</option>
              <option value="plantation">Plantation</option>
              <option value="donation">Donation</option>
              <option value="fundraising">Fundraising</option>
              <option value="blood-drive">Blood Drive</option>
              <option value="community-workshop">Community Workshop</option>
            </select>
          </fieldset>
        </div>

        {/* Thumbnail */}
        <fieldset className="p-3 border fieldset bg-secondary border-base-300 rounded-box">
          <label className="text-sm font-bold text-black label">
            Thumbnail Image URL
          </label>
          <input
            type="url"
            name="thumbnail"
            placeholder="Enter Thumbnail Image URL"
            className="w-full input input-bordered"
            required
          />
        </fieldset>

        {/* Location */}
        <fieldset className="p-3 border fieldset bg-secondary border-base-300 rounded-box">
          <label className="text-sm font-bold text-black label">Location</label>
          <input
            type="text"
            name="location"
            placeholder="Enter Event Location"
            className="w-full input input-bordered"
            required
          />
        </fieldset>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 text-lg font-bold text-black bg-white rounded hover:bg-black hover:text-white btn"
        >
          Create Event
        </button>
      </form>
    </div>
  );
};

export default Create;
