import { CB } from "@cleanbits/react";

const { Box, Condition, Data, Map } = CB;

const Text = ({
  children,
  className,
  style,
  ...props
}: {
  children: React.ReactNode;
  className: string;
  style: React.CSSProperties;
}) => {
  return (
    <h1 className={className} style={style} {...props}>
      {children}
    </h1>
  );
};

const date = "2023-11-03T01:59:04.136Z";
const isHidden = false;

const list = [
  { id: 1, name: "John", age: 20 },
  { id: 2, name: "Jane", age: 30 },
  { id: 3, name: "Joe", age: 40 },
];

export default function Page() {
  return (
    <>
      <>
        <Box
          cbAs={"div"}
          cbHidden={isHidden}
          style={{ color: "green" }}
          className="text-lg"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, amet
          obcaecati illum, a aliquam saepe ipsam illo temporibus ex ea nihil.
          Saepe aspernatur distinctio amet suscipit laudantium explicabo soluta
          atque.
        </Box>
        {!isHidden && (
          <div style={{ color: "green" }} className="text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, amet
            obcaecati illum, a aliquam saepe ipsam illo temporibus ex ea nihil.
            Saepe aspernatur distinctio amet suscipit laudantium explicabo
            soluta atque.
          </div>
        )}
      </>
      <>
        <Data
          cbValue={date}
          cbAs={Text}
          cbHidden={isHidden}
          cbCallback={getFullYear}
          className="text-2xl"
          style={{ color: "red" }}
        />
        {!isHidden && (
          <Text className="text-2xl" style={{ color: "red" }}>
            {getFullYear(date)}
          </Text>
        )}
      </>
      <>
        <Condition cbIf={true} cbAs="p">
          this is new text
        </Condition>
        <Condition.Group>
          <Condition cbIf={false}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            deserunt porro ratione. Ducimus facere corporis hic sint porro
            similique ullam aliquam a itaque maiores! Excepturi amet fuga fugit
            adipisci temporibus!
          </Condition>
          <Condition cbElseIf={true}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa,
            dolor adipisci numquam error ut itaque asperiores dicta veniam
            tempore nesciunt repellendus architecto excepturi quas labore sit
            illo! Voluptas, exercitationem tenetur.
          </Condition>
          <Condition cbElse>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            labore molestiae corporis tempora dolor, fugiat pariatur quo eum
            maiores minima numquam, culpa magni ad ratione assumenda impedit qui
            velit vitae.
          </Condition>
        </Condition.Group>
      </>
      <>
        <Map cbList={list} cbItem={Item} cbFilter={(item) => item.id !== 2} />
        {
          <>
            {list.map((item, index) => {
              if (item.id !== 2) {
                return <Item key={index} index={index} item={item} />;
              }
            })}
          </>
        }
      </>
    </>
  );
}

const Item = ({
  index,
  item,
}: {
  index: number;
  item: { name: string; age: number };
}) => {
  return (
    <div>
      {index + 1}: {item.name} {item.age}
    </div>
  );
};

const getFullYear = (date: string) => {
  return new Date(date).getFullYear();
};
