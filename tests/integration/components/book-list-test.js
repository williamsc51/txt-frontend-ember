import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | book-list', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... }); 

    let book ={
      id: 1,
      title: 'Cat',
      author: 'Pam',
      isbn: 12345,
      price: 12,
      description: 'Read this book',
      condition: 'Good',
      // thumbnail: DS.attr('string'),
      category: 'Novel'
    };

    this.set('book', book)
    await render(hbs`{{book-list book=book}}`);
    let book_attributes = this.element.querySelectorAll('p')
    assert.equal(book_attributes[0].textContent.trim(),'by Pam', 'Author name displaying');
    assert.equal(book_attributes[1].textContent.trim(),'$12');
    assert.equal(book_attributes[2].textContent.trim(),'Condition: Good');
    assert.equal(this.element.querySelector('a').textContent.trim(),'View Details', "View details link");
    assert.equal(this.element.querySelector('button').textContent.trim(), 'Add to Cart', 'Add to cart button')

  });
});
