import { useLayoutEffect } from "react";
import Image from "next/image";

import { motion } from "framer-motion";

import { AiOutlineCloseCircle } from "react-icons/ai";

const OurServicesModal = ({ item, setModalItem, modal }) => {
  const lines = item.text.split("\n");

  useLayoutEffect(() => {
    const closeListenerFnc = () => {
      setModalItem(null);
    };

    const dialogRef = modal.current;
    dialogRef?.addEventListener("close", closeListenerFnc);

    return () => {
      dialogRef?.removeEventListener("close", closeListenerFnc);
    };
  }, [modal, setModalItem]);

  useLayoutEffect(() => {
    if (item && !modal.current?.open) {
      modal.current?.showModal();
    } else if (!item && modal.current?.open) {
      setModalItem(null);
    }
  }, [item, modal, setModalItem]);

  return (
    <motion.dialog
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.3,
      }}
      ref={modal}
      autoFocus={false}
      onClick={(e) => {
        const dialogDimensions = e.currentTarget.getBoundingClientRect();
        if (
          e.clientX < dialogDimensions.left ||
          e.clientX > dialogDimensions.right ||
          e.clientY < dialogDimensions.top ||
          e.clientY > dialogDimensions.bottom
        ) {
          setModalItem(null);
        }
      }}
      className="modal"
    >
      <AiOutlineCloseCircle
        className="absolute top-3 right-4 text-xl text-[#3E5D9D] cursor-pointer transition-all active:scale-95"
        size={30}
        onClick={() => {
          setModalItem(null);
        }}
      />

      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className="flex flex-col items-center p-2 gap-[1.25rem] self-stretch rounded-[20px] bg-[#F9F9F9] overflow-hidden"
      >
        <motion.span
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className="flex flex-col justify-center items-center gap-[10px] w-[72px] h-[72px] rounded-[2000px]"
        >
          <Image
            src={`/assets/images/${item.logo}.svg`}
            width={66}
            height={61}
            alt="icon"
            priority
          />
        </motion.span>

        <motion.span
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className="flex flex-col justify-center items-center gap-[24px]"
        >
          <h4 className="self-stretch text-[#3E5D9D] text-center text-[28px] font-bold leading-[25px] tracking-[0.28px]">
            {item.title}
          </h4>

          {lines.map((line, index) =>
            index === 0 ? (
              line.trim() === "" ? null : (
                <p
                  key={index}
                  className="self-stretch text-center text-[16px] text-[#242424]"
                >
                  {line.trim()}
                </p>
              )
            ) : (
              <li key={index}>{line.trim()}</li>
            )
          )}
        </motion.span>
      </motion.div>
    </motion.dialog>
  );
};

export default OurServicesModal;
