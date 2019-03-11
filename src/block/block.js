/**
 * BLOCK: bs-authors-extract
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const {TextControl} = wp.components;

registerBlockType('bonseo/block-bs-authors-extract', {
	title: __('Authors Extract'),
	icon: 'editor-quote',
	category: 'bonseo-blocks',
	keywords: [
		__('bs-banner-authors-extract'),
		__('BonSeo'),
		__('BonSeo Block'),
	],
	edit: function ({posts, className, attributes, setAttributes}) {
		return (
			<div>
				<h2>Extracto de Autores:</h2>
				<TextControl
					className={`${className}__title`}
					label={__('Elige título:')}
					value={attributes.title}
					onChange={title => setAttributes({title})}
				/>
				<TextControl
					className={`${className}__max_entries`}
					label={__('Cuántas entradas:')}
					type="number"
					value={attributes.max_entries}
					onChange={max_entries => setAttributes({max_entries})}
				/>
			</div>
		);
	},
	save: function () {
		return null;
	}
})
;
