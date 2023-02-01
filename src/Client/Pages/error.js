 <div className='flex justify-between'>
                <div> <nav class="bg-gray-50 p-2 mt-0 fixed w-full z-10 top-0">
    <div class="container mx-auto flex flex-wrap items-center">
        <div class="flex w-full md:w-1/2  md:justify-start text-white font-extrabold ">
            <a class="text-gray-900 no-underline hover:text-black hover:no-underline" href="#home">
                <span class="text-2xl pl-2"><i class="em em-grinning"></i>Pamus</span>
            </a>
        </div>
        <div class="md:flex hidden w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
            <ul class="list-reset flex justify-between flex-1 md:flex-none items-center">
              <li class="mr-3 md:flex hidden">
                <a class="" href="#home">Home</a>
              </li>
              <li class="mr-3">
                <a class="" href="#aboutus">About Us</a>
              </li>
              <li class="mr-3">
                <a class="" href="#amenities">Amenities</a>
              </li>
              <li class="mr-3">
                <a class="" href="#pricing">Pricing</a>
              </li>
                <li class="mr-3">
                <a class="" href="#testimonials">Testimonials</a>
              </li>
                <Link className='mr-3' to='/contactus'>Contact Us</Link>
              
              <div class="flex justify-center">
  <div>
  <div class="dropdown relative ml-9">
      <button class=" flex dropdown-toggle px-9 bg-[lavender] py-1 rounded-md" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
       Login
       <IoMdArrowDropdown className='text-black text-2xl'/>
      </button>

      <ul class=" dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none "
        aria-labelledby="dropdownMenuButton1"
      >
        <li>
          <Link to='/userprofile' class=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent  hover:bg-[lavender] text-black "
            >Hosteller/Student</Link>
        </li>
        <li>
          <Link to='/staffprofile' class=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent   hover:bg-[lavender] text-black"
            href="#"
            >Staff</Link>
        </li>
      </ul>
           </div>
  </div>
</div>
            </ul>
        </div>
    </div>
        </nav></div>
                <div>
                  <h1>hello</h1>
                </div>
        </div>