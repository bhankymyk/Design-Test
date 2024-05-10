{Menu.Dropdown && (
    <div onClick={toggleDropdown}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        {/* Chevron icon */}
      </svg>
    </div>
  )}
  {Menu.Dropdown && isDropdownOpen && (
    <ul className="absolute top-full left-0 bg-white shadow-lg py-2 mt-1" onClick={handleSubmenuClick}>
      {Menu.Dropdown.map((item, subIndex) => (
        <li
          key={subIndex}
          className="px-4 py-2 cursor-pointer hover:bg-gray-100"
        >
          {item}
        </li>
      ))}
    </ul>
  )}