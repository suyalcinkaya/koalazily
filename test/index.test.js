import 'intersection-observer';
import koalazily from '../src';

function createImg() {
  const img = document.createElement('img');
  img.setAttribute('data-koalazily', 'test');
  return img;
}

test('should be defined', () => {
  expect(koalazily).toBeDefined();
})


test('should lazy load images with selector', () => {
  document.body.appendChild(createImg());
  document.body.appendChild(createImg());
  expect(koalazily().length).toBe(2);
  document.body.innerHTML = '';
})