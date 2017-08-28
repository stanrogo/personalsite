<?php $__env->startSection('head'); ?>
    <link async rel="stylesheet" type="text/css" href="<?php echo e(asset('css/blog.css')); ?>">
<?php $__env->stopSection(); ?>

<?php $__env->startSection('page-template'); ?>

    <div id="feed">
        <section class="featured-post">
            <figure class="card-figure">
                <img class="card-image" src="<?php echo e($posts[0]->getCoverImage()->getFile()->getUrl()); ?>">
                <div class="overlay"></div>
            </figure>
            <div class="featured-post--heading">
                <h2 class="featured-article-text">Featured Article</h2>
                <h1 class="featured-article-name"><?php echo e($posts[0]->getTitle()); ?></h1>
                <a class="button button--read-more" href="<?php echo e(route('post', [$posts[0]->getId(), strtolower(preg_replace('/ |:/', '-', $posts[0]->getTitle()))])); ?>">Read more</a>
            </div>
        </section>

        <div class="grid-container">

            <?php $__currentLoopData = $posts; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $post): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>

                <a href="<?php echo e(route('post', [$post->getId(), strtolower(preg_replace('/ |:/', '-', $post->getTitle()))])); ?>">

                <section class="post-container js-goToPost" data-post-name="">
                    <div class="material-card">
                        <figure class="card-figure">

                            <img class="card-image" v-if="post.imageURL"
                                 src="<?php echo e($post->getCoverImage()->getFile()->getUrl()); ?>"
                            >
                        </figure>
                        <div class="post-heading">
                            <div class="quick-fact">
                                <?php echo e(strftime(
                                        "%A, %B %d, %Y",
                                        $post->getDate()->getTimestamp()
                                    )); ?>

                            </div>
                            <div class="quick-fact">

                                <?php $__currentLoopData = $post->getTags(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $tag): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>

                                    <div class="tag"><?php echo e($tag); ?><?php if($loop->remaining > 0): ?>,&nbsp;<?php endif; ?></div>

                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                            </div>
                            <h1><?php echo e($post->getTitle()); ?></h1>
                        </div>
                    </div>
                </section>
                </a>

            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </div>
    </div>

<?php $__env->stopSection(); ?>


<?php echo $__env->make('default', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>