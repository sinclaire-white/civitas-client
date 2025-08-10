import { use, useState } from "react";

import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthContext";

const UserProfile = () => {
  const { user, logIn } = use(AuthContext);
  const [name, setName] = useState(user?.displayName || '');
  const [photo, setPhoto] = useState(user?.photoURL || user?.photo || '');

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const updatedUser = {
      ...user,
      displayName: name,
      photoURL: photo,
      photo: photo,
    };
    logIn(updatedUser);
    Swal.fire('Success!', 'Your profile has been updated.', 'success');
  };

  return (
    <div className="max-w-screen-xl px-4 mx-auto">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="mb-6 text-4xl font-bold text-center text-primary">My Profile</h1>
        <div className="flex flex-col items-center justify-center">
          <div className="p-8 space-y-6 bg-base-200 rounded-box">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={photo || "https://cdn-icons-png.flaticon.com/512/149/149071.png"} alt="User Avatar" />
              </div>
            </div>
            <form onSubmit={handleUpdateProfile} className="w-full max-w-lg space-y-4">
              <div className="form-control">
                <label className="label"><span className="label-text">Name</span></label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label"><span className="label-text">Photo URL</span></label>
                <input
                  type="url"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  value={photo}
                  onChange={(e) => setPhoto(e.target.value)}
                />
              </div>
              <div className="mt-6 form-control">
                <button type="submit" className="text-white btn btn-primary">Update Profile</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;