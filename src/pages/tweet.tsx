import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import * as motion from "motion/react-client";
export default function Blog() {
  // Create an array with data for the cards
  const cards = [
    {
      image:
        "https://images.unsplash.com/photo-1525431836161-e40d6846e656?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3BsYXNofGVufDB8fDB8fHww",
      title: "Chat Collect",
      description:
        "Designed, developed and sold animated UI components for developers.",
      content: "Card Content 1",
      footer: "Card Footer 1",
    },
    {
      image:
        "https://images.unsplash.com/photo-1525431836161-e40d6846e656?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3BsYXNofGVufDB8fDB8fHww",
      title: "Chat Collect",
      description:
        "Designed, developed and sold animated UI components for developers.",
      content: "Card Content 1",
      footer: "Card Footer 1",
    },
    {
      image:
        "https://images.unsplash.com/photo-1525431836161-e40d6846e656?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3BsYXNofGVufDB8fDB8fHww",
      title: "Chat Collect",
      description:
        "Designed, developed and sold animated UI components for developers.",
      content: "Card Content 1",
      footer: "Card Footer 1",
    },
    {
      image:
        "https://images.unsplash.com/photo-1525431836161-e40d6846e656?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3BsYXNofGVufDB8fDB8fHww",
      title: "Automatic Chat",
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      content: "Card Content 4",
      footer: "Card Footer 4",
    },
  ];

  return (
    <div className="relative overflow-y-hidden">
      {/* Background Flickering Grid */}

      {/* Card Content */}
      <section className="relative z-10 mx-auto py-10 overflow-y-hidden">
        <h3 className="text-2xl tracking-wider text-black dark:text-white font-bold text-center py-4">
          Blogs
        </h3>
        <div className="grid grid-cols-1 gap-6 max-w-screen-xl mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 text-uppercase">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.025 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card
                key={index}
                className="max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
              >
                <CardHeader className="relative p-0">
                  <img src={card.image} alt={card.title} />
                  <CardTitle className="font-bold text-lg p-4">
                    {card.title}
                  </CardTitle>
                  <CardDescription className="font-semibold text-sm  p-4">
                    {card.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className=" p-4 font-semibold text-sm">
                  <p className=" text-base">{card.content}</p>
                </CardContent>
                <CardFooter className=" p-4 font-semibold text-sm">
                  <p className="">{card.footer}</p>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
