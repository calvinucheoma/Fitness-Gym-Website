import { ClassType, SelectedPage } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HeaderText from "@/shared/HeaderText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa eligendi, harum excepturi fugit, id officiis consectetur libero ullam eveniet voluptatibus incidunt numquam deleniti odio magnam voluptas nulla impedit quas vel!",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa eligendi, harum excepturi fugit, id officiis consectetur libero ullam eveniet voluptatibus incidunt numquam deleniti odio magnam voluptas nulla impedit quas vel!",
    image: image2,
  },
  {
    name: "Abs Core Training Classes",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa eligendi, harum excepturi fugit, id officiis consectetur libero ullam eveniet voluptatibus incidunt numquam deleniti odio magnam voluptas nulla impedit quas vel!",
    image: image3,
  },
  {
    name: "AdventureTraining Classes",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa eligendi, harum excepturi fugit, id officiis consectetur libero ullam eveniet voluptatibus incidunt numquam deleniti odio magnam voluptas nulla impedit quas vel!",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa eligendi, harum excepturi fugit, id officiis consectetur libero ullam eveniet voluptatibus incidunt numquam deleniti odio magnam voluptas nulla impedit quas vel!",
    image: image5,
  },
  {
    name: " Training Classes",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa eligendi, harum excepturi fugit, id officiis consectetur libero ullam eveniet voluptatibus incidunt numquam deleniti odio magnam voluptas nulla impedit quas vel!",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HeaderText>OUR CLASSES</HeaderText>
            <p className="py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eius
              consequuntur omnis pariatur fuga sed repellat dicta adipisci
              magnam aliquid, aut reprehenderit voluptatem cumque beatae
              obcaecati nostrum numquam repellendus ducimus.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;

// when implementing scrolls, the child container would have a very large width while the parent container would have a smaller width or can be set to the full extent of the device screen
// whitespace-nowrap means we won't have any whitespace left over
