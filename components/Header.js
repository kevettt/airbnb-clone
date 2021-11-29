import Image from "next/image";
import {
  SearchIcon,
  MenuIcon,
  GlobeAltIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/dist/client/router";
import UserMenu from "./UserMenu";

const Header = ({ placeholder }) => {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfGuest, setNumberOfGuest] = useState(1);
  

  const router = useRouter();

 

  const resetInput = () => {
    setSearchInput("");
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numberOfGuest: numberOfGuest,
      },
    });
  };

  const [auth, setAuth] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/user`, {
          credentials: 'include'
        })
        const content = await response.json()
        console.log(content);
        setAuth(true)
      } catch (e) {
        console.log(`error: ${e}`);
        setAuth(false);
      }
    })();

  });

 

  return (
    <header
      className="
            sticky
            top-0
            z-50
            grid
            grid-cols-3
            bg-white
            shadow-md
            p-5
            md:px-10
            "
    >
      {/* start */}
      <div
        className="
                relative
                flex
                items-center
                h-10
                cursor-pointer
                my-auto
                "
      >
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          onClick={() => router.push("/")}
        />
      </div>

      {/* middle */}
      <div
        className="
                flex
                items-center
                md:border-2
                md:shadow-sm
                rounded-full
                p-2
            "
      >
        <input
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
          className="
                        flex-grow
                        bg-transparent
                        outline-none
                        text-gray-500
                        placeholder-gray-400
                        text-sm
                    "
          type="text"
          placeholder={placeholder || "Start your search"}
        />
        <SearchIcon
          className="
                    hidden
                    md:inline-flex
                    h-8
                    bg-red-400
                    text-white
                    rounded-full
                    p-2
                    cursor-pointer
                    mx-auto
                    md:ml-2
                    "
        />
      </div>

      {/* end */}
      <div
        className="
                flex
                items-center
                justify-end
                space-x-2
                text-gray-500
            "
      >
        <p
          className="
                    hidden
                    md:inline
                    pl-2
                    cursor-pointer
                "
        >
          Become a host
        </p>
        <GlobeAltIcon
          className="
                    h-6
                    cursor-pointer
                "
        />
        <div
          className="
                    border-2
                    rounded-full
                    flex
                    items-center
                    space-x-2
                    p-2
                "
        >
          <MenuIcon
            className="
                        h-6
                        cursor-pointer
                    "
          />

          <UserMenu auth={auth}/>
        </div>

      </div>

      {searchInput && (
        <div
          className="
                    flex
                    flex-col
                    col-span-3
                    mx-auto
                "
        >
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div
            className="
                        flex
                        items-center
                        border-b
                        mb-4
                    "
          >
            <h2
              className="
                            text-2xl
                            flex-grow
                            font-semibold
                        "
            >
              Number of Guests
            </h2>
            <div
              className="
                            flex
                            items-center
                            justify-center
                            border-2
                            pl-3
                            border-gray-300
                            rounded-lg
                        "
            >
              <UsersIcon
                className="
                                h-5
                            "
              />
              <input
                className="
                                w-11
                                pl-2  
                                text-lg
                                outline-none
                                text-red-400
                                "
                type="number"
                value={numberOfGuest}
                onChange={(e) => setNumberOfGuest(e.target.value)}
                min={1}
                max={20}
              />
            </div>
          </div>

          <div
            className="
                        flex
                        
                    "
          >
            <button
              onClick={resetInput}
              className="
                            flex-grow
                            text-gray-500
                            font-bold
                        "
            >
              Cancel
            </button>

            <button
              onClick={search}
              className="
                                flex-grow
                                text-red-400
                                font-bold
                        "
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
