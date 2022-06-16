body {
  font-family: 'Sans-serif';
}
h1,
h2,
h3 {
  margin: 0.5rem 0;
}
h1 {
  font-size: 1.5rem;
}
h2 {
  font-size: 1.2rem;
}
h3 {
  font-size: 1rem;
}
a {
  text-decoration: none;
}
.row {
  display: flex;
  justify-content: space-between;
}
.row.center {
  align-items: center;
}
.col-1 {
  flex: 1;
}
.col-2 {
  flex: 2;
}
.block {
  background-color: #ccd3a2;
  padding: 1rem;
  margin: 0.5rem;
  border-radius: 0.5rem;
}
.text-right {
  text-align: right;
}
img.small {
  max-height: 8rem;
}
button {
  font-size: 0.8rem;
  padding: 0.2rem;
  margin: 0.1rem;
  border-radius: 0.5rem;
  border: 0.1rem #404040 solid;
  background-color: #f0c040;
  width: 100%;
  cursor: pointer;
}
button.add {
  background-color: #f09e40;
  width: 1.5rem;
}
button.remove {
  background-color: #7c7070;
  width: 1.5rem;
}
button.badge {
  background-color: #2c086e;
  border: none;
  color: #ffffff;
  width: 1.5rem;
}