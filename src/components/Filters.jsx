/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
const notificationMethods = [
  { id: "minted", title: "Minted" },
  { id: "bids", title: "Bids" },
  { id: "liked", title: "Liked" },
  { id: "followings", title: "Followings" },
];

export default function Example() {
  return (
    <div className="my-5 text-gray-900 dark:text-white ">
      <label className="text-base font-medium text-gray-900 dark:text-white my-5">
        Filters
      </label>

      <fieldset className="mt-4">
        <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
          {notificationMethods.map((notificationMethod) => (
            <div key={notificationMethod.id} className="flex items-center">
              <input
                id={notificationMethod.id}
                name="notification-method"
                type="radio"
                defaultChecked={notificationMethod.id === "email"}
                className="h-4 w-4 border-gray-300 text-yellow-400 focus:ring-yellow-500"
              />
              <label
                htmlFor={notificationMethod.id}
                className="ml-3 block text-sm font-medium text-gray-900 dark:text-white"
              >
                {notificationMethod.title}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  );
}
