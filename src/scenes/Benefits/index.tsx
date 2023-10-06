import { BenefitType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import {
  AcademicCapIcon,
  HomeModernIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import HeaderText from "@/shared/HeaderText";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ratione, ipsum sint possimus eos quam dolores deleniti facere.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ratione, ipsum sint possimus eos quam dolores deleniti facere.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ratione, ipsum sint possimus eos quam dolores deleniti facere.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:my-5 md:w-3/5"
        >
          <HeaderText>MORE THAN JUST A GYM</HeaderText>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>
        {/* BENEFITS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={container}
          className="mt-5 items-center justify-between gap-8 md:flex"
        >
          {benefits.map((benefit: BenefitType) => {
            return (
              <Benefit
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                setSelectedPage={setSelectedPage}
              />
            );
          })}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            src={BenefitsPageGraphic}
            alt="benefits-page-graphic"
            className="mx-auto"
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[-1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 1 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HeaderText>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>
                  </HeaderText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 1 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tempore libero voluptates, non, corrupti animi facere minima
                nulla, sunt impedit ullam saepe quos placeat debitis voluptatem
                velit ipsum repellendus veritatis ipsa. Lorem ipsum dolor sit
                amet consectetur, adipisicing elit. Aliquam ipsa minus vitae
                fugiat! Iusto accusantium accusamus, repellendus laboriosam
                eligendi perspiciatis at tempore, dicta a, dolores suscipit
                assumenda qui deleniti nihil?
              </p>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                officiis non minus corrupti neque reiciendis quis natus
                laboriosam aliquid, explicabo accusamus ratione quidem
                voluptatum ipsam autem quasi voluptates. Tempora, perferendis.
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:z[-1] before:absolute before:-bottom-20 before:right-40 before:content-sparkles"></div>
              <ActionButton setSelectedPage={setSelectedPage}>
                Join Now
              </ActionButton>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;

// min-h-full means at the very least this section should take up the full height of the page
