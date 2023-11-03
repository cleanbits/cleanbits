# CleanBits React

## Installation

```bash
npm install @cleanbits/react
```

## Usage

```jsx
<>
  <Box
    cbAs={"div"}
    cbHidden={isHidden}
    style={{ color: "green" }}
    className="text-lg"
  >
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, amet
    obcaecati illum, a aliquam saepe ipsam illo temporibus ex ea nihil. Saepe
    aspernatur distinctio amet suscipit laudantium explicabo soluta atque.
  </Box>
  {!isHidden && (
    <div style={{ color: "green" }} className="text-lg">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, amet
      obcaecati illum, a aliquam saepe ipsam illo temporibus ex ea nihil. Saepe
      aspernatur distinctio amet suscipit laudantium explicabo soluta atque.
    </div>
  )}
</>
```

```jsx
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
```

```jsx
<>
  <Condition cbIf={true} cbAs="p">
    this is new text
  </Condition>
  <Condition.Group>
    <Condition cbIf={false}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias deserunt
      porro ratione. Ducimus facere corporis hic sint porro similique ullam
      aliquam a itaque maiores! Excepturi amet fuga fugit adipisci temporibus!
    </Condition>
    <Condition cbElseIf={true}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, dolor
      adipisci numquam error ut itaque asperiores dicta veniam tempore nesciunt
      repellendus architecto excepturi quas labore sit illo! Voluptas,
      exercitationem tenetur.
    </Condition>
    <Condition cbElse>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique labore
      molestiae corporis tempora dolor, fugiat pariatur quo eum maiores minima
      numquam, culpa magni ad ratione assumenda impedit qui velit vitae.
    </Condition>
  </Condition.Group>
</>
```

```jsx
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
```
