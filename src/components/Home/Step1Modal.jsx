import { useState } from 'react';
import { CalenderSVG, DurationSvg, GlobeSvg } from '../../utils/svgs';
import { InputWithDropdown } from '../core/PhoneInput';

const Step1Modal = ({ data, setSelectedItem }) => {
  const [step, setStep] = useState(0);
  return (
    <>
      <div className={`relative z-40 items-end `} aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div className="fixed inset-0 bg-black bg-opacity-80 transition-opacity" aria-hidden="true"></div>

        <div className="fixed   inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center  text-center sm:items-center sm:p-0">
            {step === 0 && <Step1 setStep={setStep} data={data} setSelectedItem={setSelectedItem} />}
            {step === 1 && <Step2 setSelectedItem={setSelectedItem} data={data} />}
          </div>
        </div>
      </div>
    </>
  );
};

const Step1 = ({ setStep, data, setSelectedItem }) => {
  return (
    <div className="relative transform  overflow-y-auto  rounded-2xl w-[33rem] bg-white text-left shadow-xl transition-all ">
      <div className="p-4  ">
        <div className="flex p-2 px-2 gap-2 items-center">
          <span className="w-full h-[5px] rounded-sm bg-[#337AB7]"></span>
          <span className="w-full h-[5px] rounded-sm bg-[#337AB7] opacity-10"></span>
          <span
            className="hover:cursor-pointer"
            onClick={() => {
              setSelectedItem(null);
            }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.00019 7.59122L9.97744 11.5685C10.1885 11.7795 10.4747 11.8981 10.7732 11.8981C11.0717 11.8981 11.3579 11.7795 11.5689 11.5685C11.78 11.3574 11.8986 11.0712 11.8986 10.7727C11.8986 10.4743 11.78 10.188 11.5689 9.97697L7.59019 5.99972L11.5682 2.02247C11.6726 1.91797 11.7555 1.79392 11.812 1.6574C11.8685 1.52089 11.8976 1.37458 11.8975 1.22683C11.8975 1.07908 11.8684 0.932781 11.8118 0.796291C11.7552 0.659801 11.6723 0.535792 11.5678 0.431341C11.4633 0.326891 11.3393 0.244047 11.2028 0.187538C11.0662 0.131028 10.9199 0.101961 10.7722 0.101996C10.6244 0.102031 10.4781 0.131167 10.3416 0.18774C10.2052 0.244314 10.0811 0.327217 9.97669 0.431717L6.00019 4.40897L2.02294 0.431717C1.91921 0.32422 1.79512 0.238457 1.65789 0.179433C1.52066 0.120409 1.37306 0.0893058 1.22368 0.0879378C1.07431 0.0865698 0.926153 0.114965 0.787869 0.171465C0.649585 0.227966 0.523937 0.311441 0.418259 0.417021C0.31258 0.5226 0.228987 0.648168 0.172355 0.786399C0.115724 0.92463 0.0871897 1.07276 0.0884169 1.22213C0.089644 1.37151 0.120608 1.51915 0.179503 1.65643C0.238397 1.79371 0.324042 1.91789 0.431441 2.02172L4.41019 5.99972L0.432192 9.97772C0.324793 10.0815 0.239147 10.2057 0.180253 10.343C0.121358 10.4803 0.0903939 10.6279 0.0891668 10.7773C0.0879397 10.9267 0.116474 11.0748 0.173105 11.213C0.229736 11.3513 0.31333 11.4768 0.419009 11.5824C0.524687 11.688 0.650335 11.7715 0.788619 11.828C0.926903 11.8845 1.07506 11.9129 1.22443 11.9115C1.37381 11.9101 1.52141 11.879 1.65864 11.82C1.79587 11.761 1.91996 11.6752 2.02369 11.5677L6.00019 7.59122Z"
                fill="#363636"
              />
            </svg>
          </span>
        </div>
      </div>
      <div className="bg-white px-4 -mt-5 sm:p-6 sm:pb-4 flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <div>{data.title}</div>
          <div className="flex flex-row gap-4 items-center">
            <div className="flex flex-row gap-1 items-center">
              <div>
                <CalenderSVG width={'16'} height={'16'} fill="#818184" />
              </div>
              <div>{data.cards[0].title}</div>
            </div>
            <div className="flex flex-row gap-1 items-center">
              <div>
                <DurationSvg width={'16'} height={'16'} fill="#818184" />
              </div>
              <div>{data.cards[1].title}</div>
            </div>
            <div className="flex flex-row gap-1 items-center">
              <div>
                <GlobeSvg width={'16'} height={'16'} fill="#818184" />
              </div>
              <div>{data.cards[2].title}</div>
            </div>
          </div>

          <div className="flex flex-col  shadow-md border-[1px] border-[#E4E4E4] rounded-xl">
            <div className="p-1 px-3">Session timings: 8 - 8:45 am (IST)</div>
            <div className="flex flex-row gap-2 items-center p-1 px-3 bg-[#337AB71A] ">
              <div>
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1 7.49935V2.49935C1 2.14573 1.14048 1.80659 1.39052 1.55654C1.64057 1.30649 1.97971 1.16602 2.33333 1.16602H8C8.35362 1.16602 8.69276 1.30649 8.94281 1.55654C9.19286 1.80659 9.33333 2.14573 9.33333 2.49935V7.49935C9.33333 7.85297 9.19286 8.19211 8.94281 8.44216C8.69276 8.69221 8.35362 8.83268 8 8.83268H2.33333C1.97971 8.83268 1.64057 8.69221 1.39052 8.44216C1.14048 8.19211 1 7.85297 1 7.49935ZM12.4453 1.66002L9.77867 4.03535C9.74352 4.06656 9.71537 4.10485 9.69607 4.1477C9.67677 4.19056 9.66675 4.23701 9.66667 4.28402V5.46935C9.66675 5.51635 9.67677 5.5628 9.69607 5.60566C9.71537 5.64852 9.74352 5.68681 9.77867 5.71802L12.4453 8.09335C12.4934 8.13601 12.5527 8.16388 12.6162 8.1736C12.6798 8.18332 12.7447 8.17448 12.8033 8.14813C12.8619 8.12179 12.9117 8.07907 12.9466 8.02511C12.9815 7.97116 13 7.90827 13 7.84402V1.90935C13 1.84509 12.9815 1.78221 12.9466 1.72825C12.9117 1.6743 12.8619 1.63158 12.8033 1.60523C12.7447 1.57889 12.6798 1.57004 12.6162 1.57976C12.5527 1.58948 12.4934 1.61735 12.4453 1.66002Z"
                    stroke="#337AB7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="text-[#337AB7]">Recording available for 24 hours</div>
            </div>
          </div>
          <hr />
          <div className="flex flex-col gap-4">
            <div className="text-base font-medium">Your Mobile Number</div>
            <InputWithDropdown />
            <div className="flex flex-row items-center gap-1">
              <div>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.2 12H8.8V7.2H7.2V12ZM8 5.6C8.22667 5.6 8.4168 5.5232 8.5704 5.3696C8.724 5.216 8.80053 5.02613 8.8 4.8C8.8 4.57333 8.7232 4.38347 8.5696 4.2304C8.416 4.07733 8.22613 4.00053 8 4C7.77333 4 7.58347 4.0768 7.4304 4.2304C7.27733 4.384 7.20053 4.57387 7.2 4.8C7.2 5.02667 7.2768 5.2168 7.4304 5.3704C7.584 5.524 7.77387 5.60053 8 5.6ZM8 16C6.89333 16 5.85333 15.7899 4.88 15.3696C3.90667 14.9493 3.06 14.3795 2.34 13.66C1.62 12.94 1.05013 12.0933 0.6304 11.12C0.210667 10.1467 0.000533333 9.10667 0 8C0 6.89333 0.210133 5.85333 0.6304 4.88C1.05067 3.90667 1.62053 3.06 2.34 2.34C3.06 1.62 3.90667 1.05013 4.88 0.6304C5.85333 0.210667 6.89333 0.000533333 8 0C9.10667 0 10.1467 0.210133 11.12 0.6304C12.0933 1.05067 12.94 1.62053 13.66 2.34C14.38 3.06 14.9501 3.90667 15.3704 4.88C15.7907 5.85333 16.0005 6.89333 16 8C16 9.10667 15.7899 10.1467 15.3696 11.12C14.9493 12.0933 14.3795 12.94 13.66 13.66C12.94 14.38 12.0933 14.9501 11.12 15.3704C10.1467 15.7907 9.10667 16.0005 8 16ZM8 14.4C9.78667 14.4 11.3 13.78 12.54 12.54C13.78 11.3 14.4 9.78667 14.4 8C14.4 6.21333 13.78 4.7 12.54 3.46C11.3 2.22 9.78667 1.6 8 1.6C6.21333 1.6 4.7 2.22 3.46 3.46C2.22 4.7 1.6 6.21333 1.6 8C1.6 9.78667 2.22 11.3 3.46 12.54C4.7 13.78 6.21333 14.4 8 14.4Z"
                    fill="#818184"
                  />
                </svg>
              </div>
              <div className="text-2xs">You can access the workshop using this number</div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 pt-8 pb-6 sm:flex sm:flex-row-reverse sm:px-6 w-full">
        <button
          onClick={() => {
            setStep(1);
          }}
          type="button"
          className=" w-full rounded-md bg-[#337AB7] px-3 py-2 text-sm font-semibold text-white shadow-sm "
        >
          Continue
        </button>
      </div>
    </div>
  );
};

const Step2 = ({ setSelectedItem, data }) => {
  return (
    <div className="relative transform overflow-y-auto  rounded-2xl w-[33rem]  bg-white text-left shadow-xl transition-all ">
      <div className="p-4  ">
        <div className="flex p-2 px-2 gap-2 items-center">
          <span className="w-full h-[5px] rounded-sm bg-[#337AB7]"></span>
          <span className="w-full h-[5px] rounded-sm bg-[#337AB7]"></span>
          <span
            className="hover:cursor-pointer"
            onClick={() => {
              setSelectedItem(null);
            }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.00019 7.59122L9.97744 11.5685C10.1885 11.7795 10.4747 11.8981 10.7732 11.8981C11.0717 11.8981 11.3579 11.7795 11.5689 11.5685C11.78 11.3574 11.8986 11.0712 11.8986 10.7727C11.8986 10.4743 11.78 10.188 11.5689 9.97697L7.59019 5.99972L11.5682 2.02247C11.6726 1.91797 11.7555 1.79392 11.812 1.6574C11.8685 1.52089 11.8976 1.37458 11.8975 1.22683C11.8975 1.07908 11.8684 0.932781 11.8118 0.796291C11.7552 0.659801 11.6723 0.535792 11.5678 0.431341C11.4633 0.326891 11.3393 0.244047 11.2028 0.187538C11.0662 0.131028 10.9199 0.101961 10.7722 0.101996C10.6244 0.102031 10.4781 0.131167 10.3416 0.18774C10.2052 0.244314 10.0811 0.327217 9.97669 0.431717L6.00019 4.40897L2.02294 0.431717C1.91921 0.32422 1.79512 0.238457 1.65789 0.179433C1.52066 0.120409 1.37306 0.0893058 1.22368 0.0879378C1.07431 0.0865698 0.926153 0.114965 0.787869 0.171465C0.649585 0.227966 0.523937 0.311441 0.418259 0.417021C0.31258 0.5226 0.228987 0.648168 0.172355 0.786399C0.115724 0.92463 0.0871897 1.07276 0.0884169 1.22213C0.089644 1.37151 0.120608 1.51915 0.179503 1.65643C0.238397 1.79371 0.324042 1.91789 0.431441 2.02172L4.41019 5.99972L0.432192 9.97772C0.324793 10.0815 0.239147 10.2057 0.180253 10.343C0.121358 10.4803 0.0903939 10.6279 0.0891668 10.7773C0.0879397 10.9267 0.116474 11.0748 0.173105 11.213C0.229736 11.3513 0.31333 11.4768 0.419009 11.5824C0.524687 11.688 0.650335 11.7715 0.788619 11.828C0.926903 11.8845 1.07506 11.9129 1.22443 11.9115C1.37381 11.9101 1.52141 11.879 1.65864 11.82C1.79587 11.761 1.91996 11.6752 2.02369 11.5677L6.00019 7.59122Z"
                fill="#363636"
              />
            </svg>
          </span>
        </div>
      </div>
      <div className="bg-white px-4 -mt-5 sm:p-6 sm:pb-4 flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <div>{data.title}</div>
          <div className="flex flex-row gap-4 items-center">
            <div className="flex flex-row gap-1 items-center">
              <div>
                <CalenderSVG width={'16'} height={'16'} fill="#818184" />
              </div>
              <div>{data.cards[0].title}</div>
            </div>
            <div className="flex flex-row gap-1 items-center">
              <div>
                <DurationSvg width={'16'} height={'16'} fill="#818184" />
              </div>
              <div>{data.cards[1].title}</div>
            </div>
            <div className="flex flex-row gap-1 items-center">
              <div>
                <GlobeSvg width={'16'} height={'16'} fill="#818184" />
              </div>
              <div>{data.cards[2].title}</div>
            </div>
          </div>

          <div className="flex flex-col  shadow-md border-[1px] border-[#E4E4E4] rounded-xl">
            <div className="p-1 px-3">Session timings: 8 - 8:45 am (IST)</div>
            <div className="flex flex-row gap-2 items-center p-1 px-3 bg-[#337AB71A] ">
              <div>
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1 7.49935V2.49935C1 2.14573 1.14048 1.80659 1.39052 1.55654C1.64057 1.30649 1.97971 1.16602 2.33333 1.16602H8C8.35362 1.16602 8.69276 1.30649 8.94281 1.55654C9.19286 1.80659 9.33333 2.14573 9.33333 2.49935V7.49935C9.33333 7.85297 9.19286 8.19211 8.94281 8.44216C8.69276 8.69221 8.35362 8.83268 8 8.83268H2.33333C1.97971 8.83268 1.64057 8.69221 1.39052 8.44216C1.14048 8.19211 1 7.85297 1 7.49935ZM12.4453 1.66002L9.77867 4.03535C9.74352 4.06656 9.71537 4.10485 9.69607 4.1477C9.67677 4.19056 9.66675 4.23701 9.66667 4.28402V5.46935C9.66675 5.51635 9.67677 5.5628 9.69607 5.60566C9.71537 5.64852 9.74352 5.68681 9.77867 5.71802L12.4453 8.09335C12.4934 8.13601 12.5527 8.16388 12.6162 8.1736C12.6798 8.18332 12.7447 8.17448 12.8033 8.14813C12.8619 8.12179 12.9117 8.07907 12.9466 8.02511C12.9815 7.97116 13 7.90827 13 7.84402V1.90935C13 1.84509 12.9815 1.78221 12.9466 1.72825C12.9117 1.6743 12.8619 1.63158 12.8033 1.60523C12.7447 1.57889 12.6798 1.57004 12.6162 1.57976C12.5527 1.58948 12.4934 1.61735 12.4453 1.66002Z"
                    stroke="#337AB7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="text-[#337AB7]">Recording available for 24 hours</div>
            </div>
          </div>
          <hr />
          <div className="flex flex-col gap-4">
            <div className="flex flex-col  shadow-md rounded-xl p-3">
              <div>Name</div>
              <div>
                <input className="w-full border-none  border-transparent font-semibold outline-none" value="Hardik Bhalodia" />
              </div>
            </div>
            <div className="flex flex-col  shadow-md rounded-xl p-3">
              <div>Email</div>
              <div>
                <input className="w-full border-none  border-transparent font-semibold outline-none" value="hardikbhalodia999@gmail.com" />
              </div>
            </div>
            <div className="flex flex-col  shadow-md rounded-xl p-3">
              <div>City</div>
              <div>
                <input
                  className="w-full border-none  border-transparent font-semibold outline-none"
                  value=""
                  placeholder="Enter your city"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-5">
            <div className="flex flex-col gap-1">
              <div className="text-xs">This workshop can help you heal the following:</div>
              <div className="flex flex-row gap-2 whitespace-nowrap">
                {['Thyroid imbalance', 'Excess Weight', 'High BP', 'Diabetes type 2', 'PCOD'].map((ele) => {
                  return (
                    <div key={ele} className="rounded-2xl px-2 py-1 border text-3xs  text-[#818184] w-fit bg-[#fffefe] shadow-md">
                      {ele}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-xs">However, it will not be sufficient for the following conditions:</div>
              <div className="flex flex-row gap-2 whitespace-nowrap">
                {['Thyroid imbalance', 'Excess Weight', 'High BP', 'Diabetes type 2', 'PCOD'].map((ele) => {
                  return (
                    <div key={ele} className="rounded-2xl text-3xs px-2 py-1 border  text-[#818184] w-fit bg-[#fffefe] shadow-md">
                      {ele}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 pt-8 pb-6 sm:flex sm:flex-row-reverse sm:px-6 w-full">
        <button
          onClick={() => {
            setSelectedItem(null);
          }}
          type="button"
          className=" w-full rounded-md bg-[#337AB7] px-3 py-2 text-sm font-semibold text-white shadow-sm "
        >
          Continue to Payment
        </button>
      </div>
    </div>
  );
};
export default Step1Modal;
