<?php $__env->startSection('page-template'); ?>

    <article id="post">
        <div class="cover-wrapper">
            <img class="cover" src="<?php echo e($post->getCoverImage()->getFile()->getUrl()); ?>">
            <div class="cover--overlay"></div>
            <div class="cover--title">
                <h1><?php echo e($post->getTitle()); ?></h1>
                <h2>By Stanley Clark</h2>
            </div>
        </div>
        <a class="button" href="<?php echo e(route('blog')); ?>"><span class="lnr lnr-arrow-left"></span>Back</a>

        <div class="post-content grid-container">

            <div>
                <?php echo e(\Illuminate\Mail\Markdown::parse($post->getContent())); ?>

            </div>
        </div>
    </article>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('default', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>