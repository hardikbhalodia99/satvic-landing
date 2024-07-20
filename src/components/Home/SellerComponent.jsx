const SellerComponent = ({ data,setSelectedItem }) => {
  return (
    <>
      <div className=" flex flex-col md:flex-row  p-4 gap-6 pt-7 shadow-xl rounded-xl bg-white ">
        <div className="relative">
          <img src={data.image} className="w-full h-auto rounded-xl" />
          <div className="absolute top-2  left-2 flex flex-col px-4 bg-white rounded-lg p-1">
            <div className="text-[12px] ">Starts in:</div>
            <div className="text-[15px] font-semibold">2 DAYS</div>
          </div>
        </div>
        <div className="max-w-[60vh] flex flex-col gap-4">
          <div>
            <div className="flex flex-row justify-between">
              <div className="text-lg font-semibold">{data.title}</div>
              {data.tag && (
                <div className="md:flex hidden flex-row  gap-2 bg-[#337AB71A] rounded-xl items-center p-1 px-3">
                  <div>
                    <svg width="16" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15.875 4.61c0 4.921-7.298 8.905-7.609 9.07a.562.562 0 0 1-.532 0C7.423 13.515.125 9.53.125 4.61A4.364 4.364 0 0 1 4.485.25C5.935.25 7.207.874 8 1.93 8.792.874 10.064.25 11.516.25a4.364 4.364 0 0 1 4.359 4.36Z"
                        fill="#337AB7"
                      />
                    </svg>
                  </div>
                  <div className="text-[#337AB7] font-semibold text-2xs">{data.tag}</div>
                </div>
              )}
            </div>
            <div className="flex flex-row gap-2 items-center">
              <div className="flex flex-row items-center gap-1 bg-[#53C267] rounded-lg px-[4px] py-[1px]">
                <div className="text-white">{data.star}</div>
                <div>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M11.5432 5.49987L9.19577 7.54849L9.89894 10.5985C9.93615 10.758 9.92554 10.9249 9.86842 11.0783C9.8113 11.2317 9.71022 11.3649 9.57781 11.4613C9.4454 11.5576 9.28754 11.6127 9.12396 11.6198C8.96038 11.6269 8.79835 11.5856 8.65811 11.501L5.99792 9.88755L3.34345 11.501C3.20322 11.5856 3.04118 11.6269 2.8776 11.6198C2.71403 11.6127 2.55616 11.5576 2.42375 11.4613C2.29134 11.3649 2.19026 11.2317 2.13314 11.0783C2.07603 10.9249 2.06541 10.758 2.10262 10.5985L2.80475 7.55162L0.456849 5.49987C0.332666 5.39277 0.242869 5.25138 0.198718 5.09345C0.154567 4.93552 0.158029 4.76806 0.208668 4.61209C0.259307 4.45611 0.354869 4.31856 0.483372 4.21668C0.611874 4.1148 0.767596 4.05313 0.93101 4.03939L4.02581 3.77134L5.23385 0.889946C5.29693 0.738754 5.40334 0.609607 5.53968 0.518767C5.67601 0.427927 5.83618 0.379456 6 0.379456C6.16383 0.379456 6.32399 0.427927 6.46032 0.518767C6.59666 0.609607 6.70307 0.738754 6.76615 0.889946L7.97784 3.77134L11.0716 4.03939C11.235 4.05313 11.3907 4.1148 11.5192 4.21668C11.6477 4.31856 11.7433 4.45611 11.7939 4.61209C11.8446 4.76806 11.848 4.93552 11.8039 5.09345C11.7597 5.25138 11.6699 5.39277 11.5458 5.49987H11.5432Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <div className="text-[#818184] text-2xs font-semibold">{data.reviews} Reviews</div>
            </div>
          </div>
          <div className="text-xs">{data.description}</div>
          <div className="flex flex-row gap-3">
            {data.cards.map((element, index) => {
              console.log('%c 🍆 element', 'color:#e41a6a', element);
              return (
                <>
                  <div
                    key={index}
                    className="flex flex-row gap-3 items-center shadow-sm p-3 rounded-xl border-[1px] border-color-[#E4E4E4] w-fit h-[8vh]"
                  >
                    <div> {element.svg}</div>
                    <div className="flex flex-col gap-1">
                      <div className="text-2xs whitespace-nowrap">{element.title}</div>
                      <div className="text-[#818184] text-3xs -mt-1 whitespace-nowrap">{element.description}</div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="flex flex-row gap-2 items-center ">
            <div>
              <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1.66732 0.5H10.0007L9.16732 2.16667H6.45065C6.85065 2.65 7.15065 3.21667 7.32565 3.83333H10.0007L9.16732 5.5H7.50065C7.39738 6.53896 6.9461 7.51255 6.22002 8.26283C5.49395 9.01311 4.53567 9.49606 3.50065 9.63333V9.66667H2.91732L7.91732 15.5H5.83398L0.833984 9.66667V8H2.91732C4.38398 8 5.60065 6.91667 5.80065 5.5H0.833984L1.66732 3.83333H5.55065C5.08398 2.85 4.08398 2.16667 2.91732 2.16667H0.833984L1.66732 0.5Z"
                  fill="#363636"
                />
              </svg>
            </div>
            <div className="text-sm font-semibold">{data.price}</div>
          </div>
          <div className="flex flex-row gap-5 items-center w-full">
            <button onClick={()=>{setSelectedItem(data)}} className="bg-[#337AB7] w-full whitespace-nowrap text-white leading-6 p-3 rounded-lg font-bold text-[18px]  lg:px-5">
              Join the challenge
            </button>
            <button className="border-[#337AB7] border-2 w-full text-[#337AB7] whitespace-nowrap leading-6 p-3 rounded-lg text-[18px] font-bold  lg:px-5">
              View details
            </button>
          </div>
          <div className="flex flex-row gap-2 items-center ">
            <div>
              <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15.5456 17.6818V15.8636C15.5456 14.8992 15.1625 13.9743 14.4806 13.2923C13.7986 12.6103 12.8737 12.2272 11.9092 12.2272H4.63641C3.67197 12.2272 2.74704 12.6103 2.06508 13.2923C1.38312 13.9743 1 14.8992 1 15.8636V17.6818"
                  stroke="#337AB7"
                  stroke-width="1.77778"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.27117 8.59084C10.2795 8.59084 11.9076 6.96276 11.9076 4.95443C11.9076 2.9461 10.2795 1.31802 8.27117 1.31802C6.26284 1.31802 4.63477 2.9461 4.63477 4.95443C4.63477 6.96276 6.26284 8.59084 8.27117 8.59084Z"
                  stroke="#337AB7"
                  stroke-width="1.77778"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21.0007 17.682V15.8638C21.0001 15.0581 20.732 14.2754 20.2383 13.6386C19.7447 13.0018 19.0536 12.547 18.2734 12.3456"
                  stroke="#337AB7"
                  stroke-width="1.77778"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.6367 1.43619C15.4189 1.63646 16.1122 2.09138 16.6073 2.72921C17.1024 3.36705 17.3712 4.15152 17.3712 4.95896C17.3712 5.76639 17.1024 6.55087 16.6073 7.1887C16.1122 7.82654 15.4189 8.28145 14.6367 8.48173"
                  stroke="#337AB7"
                  stroke-width="1.77778"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="text-[#337AB7] text-xs leading-5 font-medium">{data.alreadyJoined} have already joined</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellerComponent